const path = require('path');
const _ = require('lodash')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');
    const tagTemplate = path.resolve('src/templates/tags.js');
    resolve(graphql(`
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
                tags
              }
            }
          }
        }
      }
    `).then((result) => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      // Create blog posts pages.
      const posts = result.data.allMarkdownRemark.edges;
      posts.forEach((edge) => {
        createPage({
          path: edge.node.frontmatter.path,
          component: blogPost,
        });
      });

      // Tag pages:
      let tags = [];
      // Iterate through each post, putting all found tags into `tags`
      _.each(posts, (edge) => {
        if (_.get(edge, 'node.frontmatter.tags')) {
          tags = tags.concat(edge.node.frontmatter.tags);
        }
      });
      // Eliminate duplicate tags
      tags = _.uniq(tags);

      // Make tag pages
      tags.forEach((tag) => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: tagTemplate,
          context: {
            tag,
          },
        });
      });
    }));
  });
};
