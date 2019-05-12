import React from 'react';

export interface Props {
  children: func;
}

class ThemeToggler extends React.Component<Props> {
  state = {
    theme: typeof window !== 'undefined' ? window.__theme : null,
  };

  componentDidMount() {
    this.setState({ theme: window.__theme });
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme });
    };
  }

  toggleTheme(theme) {
    window.__setPreferredTheme(theme);
  }

  render() {
    return (
      <this.props.children
        theme={this.state.theme}
        toggleTheme={this.toggleTheme}
      />
    );
  }
}

export default ThemeToggler;
