import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';
import colors from '../utils/colors';
import mq from '../utils/responsive';

const Title = styled.h1`
  grid-area: title;
  justify-self: center;
  align-self: center;
  margin-bottom: 0;
`;


const Header = () => (
  <Title>
    <Link to="/">
        Patrick Owens
    </Link>
  </Title>
);
export default Header;
