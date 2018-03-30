import React from 'react';

import profilePic from './profile-pic.jpg';

class Bio extends React.Component {
  render() {
    return (
      <p>
        <img src={profilePic} alt="Patrick" />
        Hi, I'm Patrick
      </p>
    );
  }
}

export default Bio;
