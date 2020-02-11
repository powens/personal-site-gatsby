/* eslint-disable no-console */
const path = require('path');
const _ = require('lodash');

const allPagesQuery = `
{
  allMdxBlogPost (
    sort: { fields: [date], order: DESC }
    limit: 1000
  ) {
    edges {
      node {
        slug
        tags
      }
    }
  }
}`;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const tagTemplate = path.resolve('src/templates/tags.tsx');
    resolve(
      graphql(allPagesQuery).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allMdxBlogPost.edges;

        // Create the tag pages
        let tags = [];
        _.each(posts, edge => {
          if (_.get(edge, 'node.tags')) {
            tags = tags.concat(edge.node.tags);
          }
        });
        // Eliminate duplicate tags
        tags = _.uniq(tags);

        // Make tag pages
        tags.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          });
        });
      })
    );
  });
};
