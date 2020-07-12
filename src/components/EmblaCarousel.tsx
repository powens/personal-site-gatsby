import React, { useEffect, ReactElement, useState, useCallback } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useEmblaCarousel } from 'embla-carousel/react';
import { DotButton, PrevButton, NextButton } from './EmblaCarouselButtons';
import './EmblaCarousel.css';

function EmblaCarousel(): ReactElement {
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
  const [EmblaCarouselReact, embla] = useEmblaCarousel({ loop: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => embla.scrollTo(index), [embla]);
  const scrollPrev = useCallback(() => embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <EmblaCarouselReact className="embla__viewport">
        <div className="embla__container">
          {allFile.edges.map(({ node }) => (
            <div key={node.id} className="embla__slide">
              <Img
                className="embla__slide__inner"
                fluid={node.childImageSharp.fluid}
                alt={node.name.replace(/-/g, ' ').substring(2)}
              />
            </div>
          ))}
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
              key={index}
            />
          ))}
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </EmblaCarouselReact>
    </div>
  );
}

export default EmblaCarousel;
