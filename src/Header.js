import React from 'react';
import Search from './Search';
import PropTypes from 'prop-types';
import './Header.css'

const Header = (props) => {
  return (
    <div className='headerContainer'>
      <p className='title'>HeadCount2.0</p>
      <Search search={props.search}/>
    </div>
  );
};

Header.propTypes = {
  search: PropTypes.func.isRequired
};

export default Header;