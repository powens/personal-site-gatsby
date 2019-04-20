import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Title = styled.h1`
  grid-area: title;
  justify-self: center;
  align-self: center;
  margin-bottom: 0;
`;

const Header = () => (
  <Title>
    <Link to="/">Patrick Owens</Link>
  </Title>
);

export default Header;
