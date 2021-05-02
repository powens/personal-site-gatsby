import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-templare-rows: 400px 100px;
`;

function ImageGrid(): JSX.Element {
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(
        sort: { fields: name, order: DESC }
        filter: { relativeDirectory: { regex: "/40k\\\\/start/" } }
      ) {
        edges {
          node {
            name
            id
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  return (
    <GridWrapper>
      {allFile.edges.map((d) => (
        <GatsbyImage image={d.node.childImageSharp} key={d.id} />
      ))}
    </GridWrapper>
  );
}

export default ImageGrid;
