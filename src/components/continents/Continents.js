import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Continents = (props) => {
  const { id } = props;
  const continentsList = useSelector((state) => state.continents);
  return (
    <div>
      {Object.keys(continentsList).map((continent) => {
        if (continent !== 'undefined') {
          return (
            <div key={id}>
              <h2>{continent}</h2>
              <p>{continentsList[continent]}</p>
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
