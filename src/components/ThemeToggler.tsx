import React, { useState, useEffect, useCallback } from 'react';

interface Props {
  children: React.ReactNode;
}
declare global {
  interface Window {
    __onThemeChange: () => void;
    __setPreferredTheme: (theme: string) => void;
    __theme: string;
  }
}

function ThemeToggler({ children: ChildComponent }: Props) {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? window.__theme : null
  );
  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };

    return () => {
      window.__onThemeChange = () => {};
    };
  }, []);
  const toggleTheme = useCallback((theme: string) => {
    window.__setPreferredTheme(theme);
  }, []);

  return <ChildComponent theme={theme} toggleTheme={toggleTheme} />;
}

export default ThemeToggler;
