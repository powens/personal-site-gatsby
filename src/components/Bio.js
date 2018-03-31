import React from 'react';
import styled from 'react-emotion';
import profilePic from './profile-pic.jpg';

const ProfilePicture = styled.img`
  border-radius: 50%;
  display: block;
`;

class Bio extends React.Component {
  render() {
    return (
      <div>
        <ProfilePicture src={profilePic} alt="torokokill" />
        Hi, I'm torokokill
      </div>
    );
  }
}

export default Bio;
