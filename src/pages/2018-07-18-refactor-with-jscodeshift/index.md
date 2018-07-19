---
title: Automate your refactoring with jscodeshift
date: "2018-07-18T20:49:03.284Z"
path: "/automate-refactoring-jscodeshift/"
excerpt: A crash course in jscodeshift, a library that lets you write code to automate your Javascript refactoring jobs
titleImage: "./jscodeshift.png"
tags: ["javascript", "jscodeshift", "refactoring"]
---

## Libraries mentioned in this post

* [jscodeshift 0.5.1](https://github.com/facebook/jscodeshift) 
* [recast 0.15.2](https://github.com/benjamn/recast/) 
* [jscodeshift-helper 1.1.0](https://github.com/reergymerej/jscodeshift-helper)
* [react-codemod 4.0.0](https://github.com/reactjs/react-codemod)
* [eslint 5.1.0](https://github.com/eslint/eslint) 
* [eslint-config-airbnb 17.0.0](https://github.com/airbnb/javascript) 
* [eslint-stats 1.0.0](https://github.com/ganimomer/eslint-stats)
* [ast-types 0.11.4](https://github.com/benjamn/ast-types)

# Automate your refactoring with jscodeshift

I was recently tasked with preparing a large, rather messy code base for a React 15 to 16 upgrade. Among the steps along the upgrade path was to upgrade the version of `eslint`, and `eslint-config-airbnb`; their versions having not been touched in over a year. Imagine to my horror when I saw 1000 new un`--fix`able linter errors surfaced due to the new, stricter rules. Regular expressions wouldn’t be able to fix all the issues. Doing this by hand could day several days.


    ✖ 1055 problems (1055 errors, 0 warnings)
      3 errors and 0 warnings potentially fixable with the `--fix` option.

I wondered if there was a way to automate as much of this refactoring as possible.

After a bit of searching, I discovered [jscodeshift](https://github.com/facebook/jscodeshift). jscodeshift leverages [recast](https://github.com/benjamn/recast/), a node package which converts Javascript into an Abstract Syntax Tree (AST), allows you to perform manipulation of the AST and then convert the modified AST back into code.


## Abstract Syntax Trees

ASTs are an intermediary compilation or interpretation step to convert code into a more concise machine-readable format. ASTs are used by languages like Python and Javascript as a intermediary compilation or transpilation step. [eslint](https://github.com/eslint/eslint) and [babel](https://babeljs.io/) both use an AST representation of the code. 

Some useful tools for examining ASTs are:

- Javascript:
  - [AST Explorer](http://astexplorer.net/) 
  - [jscodeshift-helper](https://github.com/reergymerej/jscodeshift-helper)
- Python:
  - [dis module](https://docs.python.org/3.7/library/dis.html)


## A basic codemod

Here is a look at a basic jscodemod transform that removes all `debugger` statements:

    /**
     * remove-debugger.js
     * Removes all debugger statements
     */
    module.exports = function(file, api) {
      const j = api.jscodeshift;
    
      return j(file.source)
        .find(j.DebuggerStatement)
        .remove()
        .toSource();
    };

First, the transform converts the source into its AST representation through `j(file.source)`. The helper function `.find()` is utilised to find all AST tree nodes that contain a `DebuggerStatement`. The results of the `.find()` are chained with a `.remove()` to remove those nodes from the AST. Finally, the `.toSource()` function is called to return the results of the transformation. 

Note that the object returned from `j(file.source)` is a **mutable object**, and not immutable. The function chain returns the modified version of itself. This is a different behaviour than the more recent paradigm shift to functional programming in Javascript.

**Example**

    const foo = 'Hello';
    debugger;
    const bar = 'World';
    
    const baz = (a, b, c) => {
      console.log('Easy as 1, 2, 3');
      debugger;
    };
    
    baz();

To run the transformation, simply run the command

    $ jscodeshift -t remove-debugger.js my-file.js

After:

    const foo = 'Hello';
    const bar = 'World';
    
    const baz = (a, b, c) => {
      console.log('Easy as 1, 2, 3');
    };
    
    baz();


## Refining the results from .find()

**Second parameter of .find()**
To further refine the results from a `.find()` query, the second parameter of `.find()` can be used. The second parameter is an optional partial AST tree match. Here is a small example to update references from `react-addons-test-utils`  to `react-dom/test-utils`, per the React 15 to 16 migration docs. 


    // Use the second parameter of .find()
    return j(file.source)
      .find(j.ImportDeclaration, {
        source: {
          value: 'react-addons-test-utils'
        }
      })
      .forEach(path => {
        path.value.source.value = 'react-dom/test-utils';
      })
      .toSource();

**Functional filtering through .filter()**
For more advanced filtering, the `.filter()` function can be chained after the `.find()`. It works identically to other functional callbacks, like `Array.filter()`. Here is the same refactoring step, written with `filter()`.


    // Using .filter()
    return j(file.source)
      .find(j.ImportDeclaration)
      .filter(path => path.value.source.value === 'react-addons-test-utils')
      .forEach(path => {
        path.value.source.value = 'react-dom/test-utils';
      })
      .toSource();


## Modifying or replacing code

As mentioned before: The AST tree produced by jscodeshift is **mutable**. In the two examples above, `.forEach()` is used to iterate over all the import statements, and modify their source. There are other self-explanatory helper functions, including:

- `replaceWith()`
- `insertBefore()`
- `insertAfter()`

Shoving any old object in to the tree will most likely have recast throw errors when it tries to convert the tree back to code. recast expects a rigid structure of objects. Instead of having to memorise the full structure of each AST node, Node Builders can be used instead.


## Node builders

Luckily jscodeshift has helper methods to build new nodes. The documentation for these nodes doesn’t exist directly, but the [AST Types](https://github.com/benjamn/ast-types) repository has a full list of definitions with parameters to explore. To create a new node, use the `camelCase()` of the node name, as opposed to the `PascalCase` version used for finding and filtering.


    /**
     * static-func-to-static-property.js
     * Converts all `static get funcName()` to `static funcName = {}`
     */
    const isStaticGet = path => (
      path.node.static && path.node.kind === 'get'
    );
    
    const staticClassProperty = path => {
      // Create a ClassProperty node with an Identifier child
      return j.classProperty(
        j.identifier(path.node.key.name),
        path.node.value.body.body[0].argument,
        null,
        true
      );
    };
    
    return j(file.source)
      .find(j.MethodDefinition)
      .filter(isStaticGet)
      .replaceWith(staticClassProperty)
      .toSource();


## Testing

jscodemod has some built-in unit testing helpers, [as documented in the readme](https://github.com/facebook/jscodeshift#unit-testing), which significantly cuts down on the amount of code required to spin up unit tests.


## Would you like to know more?

The [jscodeshift readme](https://github.com/facebook/jscodeshift) file is the place to learn more about jscodeshift and recast. There is a section on [prexisting codemods](https://github.com/facebook/jscodeshift#example-codemods) which is an excellent starting place to learn more about rolling your own codemods.

I’ve also created a basic repo with examples used in this post, available at: https://github.com/powens/jscodeshift-examples - these aren’t quite fully baked, and require more testing and handling special cases; but are intended as a place to get more familiar with the jscodeshift API.


## Back to the upgrade task

Going back to the eslint errors from original project. Here is a count of the error types, aggregated by [eslint-stats](https://github.com/ganimomer/eslint-stats): 

    react/destructuring-assignment:    746
    react/sort-comp:                   106
    max-len:                            51
    react/forbid-prop-types:            42
    react/no-access-state-in-setstate:  26
    import/named:                        4
    react/button-has-type:               4
    react/jsx-closing-tag-location:      3
    import/no-cycle:                     2
    react/no-deprecated:                 2
    react/no-this-in-sfc:                1
    ✖ 987 problems (987 errors, 0 warnings)

Some observations:

-  `react/destructuring-assignment`
  - These can be tedious to fix and could be a source of regression errors. A codemod is perfect to handle the trivial cases. Complex ones can be left to a human.
- `react/sort-comp`
  - A codemod already exists in the react-codemod repo. It is slightly out-of-date, so I hacked in a few fixes: https://github.com/reactjs/react-codemod/blob/master/transforms/sort-comp.js
  - `static get propTypes()` was used, rather than the recommended `static propTypes = {}`. This is causing some of the `react/sort-comp` errors. This could be fixed with a regex, but I created a codemod for it, because why not?
- `react/forbid-prop-types`
  - Most of these are caused by defining `intl: PropTypes.object`. A codemod can be used to add `import { intlShape } from` `'``react-intl``'``;` and swapping the `intl` definition to `intlShape`.

First things first, converting all the `static get propTypes()`, etc. into their `static propTypes =` equivalents. As all files still violate `react/sort-comp`, the number of errors are still be the same. 


    ✖ 987 problems (987 errors, 0 warnings)

Running the `destructuring-assignment.js` codemod. This won’t fix everything, but should get the majority of the issues.


    ✖ 301 problems (301 errors, 0 warnings)

680 less eslint errors. I’m feeling happier already! Next, I ran `sort-comp.js` from react-codemod.


    ✖ 210 problems (210 errors, 0 warnings)

Finally, I ran the a codemod to convert those bad `intl: PropTypes.object` definitions into `intl: intlShape`.


    ✖ 160 problems (160 errors, 0 warnings)

Not bad! Although it took a fair amount of effort to learn jscodeshift (and I’m still stumbling through it sometimes), it would have taken much, MUCH more effort to fix all these eslint errors by hand.
