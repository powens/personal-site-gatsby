/** @jsx jsx **/
import { useState, useEffect, useCallback } from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import DarkToggle from './DarkToggle';

function Header(): JSX.Element {
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
    <header
      sx={{
        // position: 'sticky',
        top: 0,
        padding: '0.4rem 0',
        backgroundColor: 'background',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        gridArea: 'header',

        borderBottom: minified ? 'border' : 'backgrond',
        height: '4rem',
        transition: 'height 0.2s ease-in, border 0.2s ease-in',

        // This is here for now as there is some z-index on codeblocks causing it to render ontop of the header
        zIndex: '1000',

        // box-shadow: 0 4px 2px -2px var(--theme-ui-colors-border);
      }}
    >
      <Link
        to="/"
        sx={{
          color: 'text',
          fontSize: '2.8rem',
          fontWeight: 'bold',
          font: 'heading',
          textDecoration: 'none',
        }}
      >
        Patrick Owens
      </Link>
      <DarkToggle />
    </header>
  );
}

export default Header;
