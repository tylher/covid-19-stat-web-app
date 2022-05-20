import React from 'react';
import { MdArrowBackIosNew, MdSettings } from 'react-icons/md';
import { IoMdMic } from 'react-icons/io';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const iconStyle = {
    fontSize: '25px',
    color: '#fff',
  };
  return (
    <div className="header-container">
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
          {location.pathname === '/'
            ? 'Covid-19 Vaaccination counts'
            : 'Continent Covid-19 vaccination count'}
        </h3>
        <div className="icon-grp">
          <IoMdMic style={iconStyle} />
          <MdSettings style={iconStyle} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
