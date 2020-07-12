import React, { ReactElement } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

interface Props {}

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-templare-rows: 400px 100px;
`;

function ImageGrid({}: Props): ReactElement {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        sort: { fields: name, order: DESC }
        filter: { relativeDirectory: { regex: "/40k\\\\/start/" } }
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

  return (
    <GridWrapper>
      {allFile.edges.map((d) => (
        <Img fluid={d.node.childImageSharp} key={d.id} />
      ))}
    </GridWrapper>
  );
}

export default ImageGrid;
