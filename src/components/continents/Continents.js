import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import './continents.css';
import world from '../../images/world2.png';

const Continents = (props) => {
  const { id } = props;
  const continentsList = useSelector((state) => state.continents);
  return (
    <div className="container">
      <div className="img-box">
        <img src={world} alt="" />
      </div>

      {continentsList.map((continent) => {
        const { name, value } = continent;
        if (name !== 'undefined') {
          return (
            <div key={id}>
              <h2>{name}</h2>
              <p>{value}</p>
              <BsArrowRightCircle onClick={() => console.log('clicked')} />
            </div>
          );
        }
        return '';
      })}
    </div>
  );
};

Continents.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Continents;
