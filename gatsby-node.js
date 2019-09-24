/* eslint-disable no-console */
const path = require('path');
const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

const allPagesQuery = `
{
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: 1000
  ) {
    edges {
      node {
        frontmatter {
          path
          tags
        }
      }
    }
  }
}`;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.tsx');
    const tagTemplate = path.resolve('src/templates/tags.tsx');
    resolve(
      graphql(allPagesQuery).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages
        const posts = result.data.allMarkdownRemark.edges;
        posts.forEach(edge => {
          createPage({
            path: edge.node.frontmatter.path,
            component: blogPost,
          });
        });

        // Create the tag pages
        let tags = [];
        _.each(posts, edge => {
          if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags);
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

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'path',
      node,
      value,
    });
  }
};
