import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import DarkToggle from './DarkToggle';

interface StyleProps {
  atTop: boolean;
}

const HeaderWrapper = styled.header<StyleProps>`
  position: sticky;
  top: 0;
  padding: 0.4rem 0;
  background-color: var(--background);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  grid-area: header;

  border-bottom: ${({ atTop }: StyleProps) =>
    atTop ? '1px solid var(--border)' : '1px solid var(--background)'};
  height: ${({ atTop }: StyleProps) => (atTop ? '3rem' : '3rem')};
  transition: height 0.2s ease-in, border 0.2s ease-in;

  // This is here for now as there is some z-index on codeblocks causing it to render ontop of the header
  z-index: 1000;

  // box-shadow: 0 4px 2px -2px var(--border);
`;

const Title = styled.span`
  font-size: 1.8rem;
  color: var(--bodyColor);
`;

function Header() {
  const [minified, setMinified] = useState(false);
  const scrollEvent = useCallback(() => {
    const isAtTop = window.scrollY <= 0;
    setMinified(!isAtTop);
  }, []);
  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', scrollEvent);
    }

    return () => {
      if (window) {
        window.removeEventListener('scroll', scrollEvent);
      }
    };
  }, [scrollEvent]);

  return (
    <HeaderWrapper atTop={minified}>
      <Link to="/">
        <Title>Patrick Owens</Title>
      </Link>
      <DarkToggle />
    </HeaderWrapper>
  );
}

export default Header;
