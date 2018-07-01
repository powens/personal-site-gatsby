import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled, { css } from 'react-emotion';
import HelmetWrapper from '../components/HelmetWrapper';
import mq from '../utils/responsive';
import TagList from '../components/TagList';

const ImageWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.span`
  margin-right: 2rem;
`;


class BlogPostTemplate extends React.Component {
  static get propTypes() {
    return {
      data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
          frontmatter: PropTypes.shape({
            title: PropTypes.string,
            date: PropTypes.string,
            tags: PropTypes.arrayOf(PropTypes.string),
          }),
          timeToRead: PropTypes.number,
          html: PropTypes.object,
        }),
      }).isRequired,
    };
  }

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const description = get(this.props, 'data.site.siteMetadata.description');
    const titleImage = post.frontmatter.titleImage.childImageSharp;
    const tags = post.frontmatter.tags;

    return (
      <div>
        <HelmetWrapper
          title={`${post.frontmatter.title} | ${siteTitle}`}
          description={description}
        />
        <h3>{post.frontmatter.title}</h3>
        <div>
          <p>
            <Label>{post.frontmatter.date}</Label>
            <Label>{post.timeToRead} min read</Label>
          </p>
        </div>
        <div>
          <TagList tags={tags} />
        </div>
        <ImageWrapper>
          <Img sizes={titleImage.sizes} />
        </ImageWrapper>
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
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        titleImage {
          childImageSharp {
            sizes(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
