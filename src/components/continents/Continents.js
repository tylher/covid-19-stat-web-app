import React from 'react';
import { useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import './continents.css';
import { NavLink } from 'react-router-dom';
import world from '../../images/world2.png';

const Continents = () => {
  const continentsList = useSelector((state) => state.continents);
  return (
    <div className="container">
      <div className="img-box">
        <img src={world} alt="" />
      </div>

      {continentsList.map((continent) => {
        const { name, value, id } = continent;
        if (name !== 'undefined') {
          return (
            <div key={id}>
              <h2>{name}</h2>
              <p>{value}</p>
              <NavLink to={`/countries/${name}`}>
                <BsArrowRightCircle />
              </NavLink>
            </div>
          );
        }
        return '';
      })}
    </div>
  );
};

export default Continents;
