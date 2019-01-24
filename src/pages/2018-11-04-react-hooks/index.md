---
title: React Hooks
date: "2018-11-04"
path: "/react-hooks/"
excerpt: React Hooks is a quirky proposed API available in the 16.7 alpha, allowing developers to more easily separate concerns and reuse logic related to component lifecycle. Let's have a quick look at how to use them. 
tags: ["javascript", "react", "hooks"]
---

![Example hook](./hooks.png)

[Hooks](https://reactjs.org/docs/hooks-intro.html) are an interesting new concept that has just landed in the React 16.7 alpha. They offer an intriguing new set of methods of interacting with React, and solving some of the pain-points that React developers have to deal with.

As React components get more and more complex, we tend to need to generate a lot of boilerplate code. This boilerplate code can exponentially bloat the line-length of a component and expose many edge cases when needing to handle the component’s life cycle. The traditional method of mitigating that complexity has always been to introduce more wrappers, leading to deeply nested component or higher order component trees.

Hooks are functions that allow developers to hook into the React state and lifecycle features from functional components.


## How do hooks work?

As it was mentioned during [the reactconf talk on hooks](https://www.youtube.com/watch?v=dpw9EHDh2bM), component state for a stateful component isn’t actually stored within that class. React actually keeps track of each component’s state. That is to say, state can exist non-class (functional) components. Appropriately named, hooks allow for the developer to hook inside the React local state and lifecycle while using functional components.


## Examples

```javascript
import React, { useState } from 'react';

function YourName() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function onFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function onLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <div>
      <input type="text" value={firstName} onChange={onFirstNameChange} />
      <input type="text" value={lastName} onChange={onLastNameChange} />
      <div>Your name is: {firstName} {lastName}</div>
    </div>
  );
}
```

The hook API is a bit esoteric at first. Each hook returns an array of items that are destructured. In the case of the `useState` hook, the first item of the array is the current value, and the second item of the array is the setter function for that value.

Looking at another hook, the `useEffect` hook is used for side-effects. For example, data fetching, manually changing the DOM.

```javascript
import React, { useState, useEffect} from 'react';

const colors = ['slategray', 'rosybrown', 'darksalmon', 'coral', 'darkseagreen'];

function ColorShifter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const html = document.querySelector('html');
    html.style.backgroundColor = colors[count % colors.length];
  });

  return (
    <div>
      <h1>Current color is: {colors[count % colors.length]}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

We wouldn’t be very good programmers if we didn’t clean up after ourselves. The return value of the `useEffect` hook can be such a clean up function.

```javascript
useEffect(() => {
  const html = document.querySelector('html');
  html.style.backgroundColor = colors[count % colors.length];
  return () => {
    html.style.backgroundColor = null;
  }
});
```

Note that `useEffect` is called after every component update. An optional third argument is available that will make the `useEffect` callback to only be called when the values change:

```javascript
useEffect(() => {
  const html = document.querySelector('html');
  html.style.backgroundColor = colors[count % colors.length];
  return () => {
    html.style.backgroundColor = null;
  }
}, [count]);
```

Certainly an interesting concept. When rolled into a large component, these hooks can significantly cut down on the visual complexity of large components.


## All the other hooks

There are a small handful of hooks currently available within React. The full documentation is here. Here is a quick breakdown of what they do:

- `useContext` - A hook to consume something from the context
- `useReducer` - Allows you to dispatch state updates to a reducer function. A mini-redux.
- `useCallback` - Returns a memoized callback
- `useMemo` - Returns a memoized value
- `useRef` - Convenience for React refs
- `useImperativeMethods` - Allows for customization of the ref
- `useMutationEffect` - Similar to useEffect, but it fires synchronously rather than asynchronously
- `useLayoutEffect` - Similar to useEffect, but fires synchronously after all DOM mutations


## Writing your own hooks

One of the most interesting things about hooks, is that we are able to write our own. This allows us to abstract reused logic in our components into helper functions; cutting down on more boilerplate, and reused code. The full documentation is available at the [React Hooks documentation](https://reactjs.org/docs/hooks-custom.html).


## Hook rules

Hooks do have two somewhat quirky rules that must be followed:

- Hooks can only be used in functional components, or other hook
- Hooks can only be used at the top level of a component or function
  - Hooks must always be called in the same order, as React depends on the order in which hooks are called to preserve between updates.


## Try them out

While hooks are a bit quirky, I can see their usefulness when dealing with large amounts of business logic; or large view-styled components. Hooks are still in an unstable state, and their API shouldn’t be considered finalized. However, I definitely see them having a place in my toolbelt in the right situations.

This post was intended as a quick overview of the power of hooks. [The React website](https://reactjs.org/docs/hooks-intro.html) has excellent documentation about hooks and how they work
