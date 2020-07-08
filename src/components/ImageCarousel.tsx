import React, { ReactElement, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  max-height: 500px;
  margin-bottom: 3rem;
`;

const CommonButton = `
  opacity: 0;
  cursor: pointer;
  z-index: 1000;
  transition: opacity 0.1s ease-in;
  background-color: rgb(159,159,159);
  border: 0;

  max-height: 500px;

  &:hover {
    opacity: 0.7;
  }
`;

const LeftButton = styled.button`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  ${CommonButton}
`;

const RightButton = styled.button`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  ${CommonButton}
`;

const ImageWraper = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 1;
  z-index: 900;
`;

function ImageCarousel(): ReactElement {
  const [index, setIndex] = useState(0);
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        sort: { fields: name, order: DESC }
        filter: { relativeDirectory: { regex: "/40k/" } }
      ) {
        edges {
          node {
            name
            id
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  const length = allFile.edges.length - 1;
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1);
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1);
  const { node } = allFile.edges[index];
  return (
    <Wrapper>
      <LeftButton onClick={() => handlePrevious()}>
        <FiChevronLeft />
      </LeftButton>
      <RightButton onClick={() => handleNext()}>
        <FiChevronRight />
      </RightButton>
      <ImageWraper>
        <Img
          imgStyle={{
            maxHeight: 500,
            objectPosition: 'center',
          }}
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, ' ').substring(2)}
        />
      </ImageWraper>
    </Wrapper>
  );
}

export default ImageCarousel;
