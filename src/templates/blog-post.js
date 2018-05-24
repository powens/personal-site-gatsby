import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Img from 'gatsby-image';
import HelmetWrapper from '../components/HelmetWrapper';


class BlogPostTemplate extends React.Component {
  static get propTypes() {
    return {
      data: PropTypes.object,
    };
  }

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const description = get(this.props, 'data.site.siteMetadata.description');
    const titleImage = post.frontmatter.titleImage.childImageSharp;

    return (
      <div>
        <HelmetWrapper
          title={`${post.frontmatter.title} | ${siteTitle}`}
          description={description}
        />
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div>
          <Img sizes={titleImage.sizes} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        titleImage {
          childImageSharp {
            sizes(maxWidth: 700) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
