import React from 'react';
import { MdArrowBackIosNew, MdSettings } from 'react-icons/md';
import { IoMdMic } from 'react-icons/io';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const iconStyle = {
    fontSize: '25px',
  };
  return (
    <div>
      <nav>
        {location.pathname.includes('countries') ? (
          <NavLink to="/">
            <MdArrowBackIosNew style={iconStyle} />
          </NavLink>
        ) : (
          ''
        )}
        <h3>
          {' '}
          {location.pathname === '/' ? 'a' : 'b'}
        </h3>
        <IoMdMic style={iconStyle} />
        <MdSettings style={iconStyle} />
      </nav>
    </div>
  );
};

export default Header;
