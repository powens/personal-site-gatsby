import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import get from 'lodash/get';
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
    const mainImage = this.props.data.mainImage;

    return (
      <div>
        <HelmetWrapper
          title={`${post.frontmatter.title} | ${siteTitle}`}
          description={description}
        />
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <Img sizes={mainImage.sizes} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!, $imageRegex: String!) {
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
      }
    }
    mainImage: imageSharp(id:{regex: $imageRegex}) {
      sizes(maxWidth: 1380) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
