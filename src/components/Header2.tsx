import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import ProfilePic from '../assets/profile-pic.jpg';
import SocialBlock from './SocialBlock';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  border-bottom: 1px solid red;
  padding: 0.4rem;
  background-color: var(--background);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin-bottom: 0;
`;

const Picture = styled.img`
  border-radius: 50%;
  vertical-align: middle;
  margin-bottom: 0;
`;

function Header2() {
  const [minified, setMinified] = useState(false);

  return (
    <HeaderWrapper>
      <Link to="/">
        <Picture src={ProfilePic} />
      </Link>
      <Link to="/">
        <Title>Patrick Owens</Title>
      </Link>
      <SocialBlock />
    </HeaderWrapper>
  );
}

export default Header2;
