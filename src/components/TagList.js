import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'gatsby';

const Tags = styled.ul`
  list-style-type: none;
  margin-left: 0;
  
  li {
    display: inline;
    margin-right: 1rem;
  }
`;

const TagList = ({ tags }) => (
  <Tags>
    {tags.map((d) => (
      <li>
        <Link to={`/tags/${d}/`} key={d}>{d}</Link>
      </li>
    ))}
  </Tags>
);

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TagList;
