import React from 'react';
import { useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { mapState } from '../../redux/continents/continents';
import './continents.css';
import world from '../../images/world2.png';

const Continents = () => {
  const continentsList = useSelector((state) => state.continents);
  const forwardStyle = {
    color: '#fff',
    fontSize: '20px',
    position: 'absolute',
    top: '10px',
    right: '20px',
  };
  return (
    <div className="container">
      <div className="headline">
        <div className="img-box">
          <img src={world} alt="" />
        </div>
        <div className="text-box">
          <h3>WORLD</h3>
          <p>
            {continentsList
              .reduce((totalVaccination, continent) => {
                let num = totalVaccination;
                num += continent.value;
                return num;
              }, 0)
              .toLocaleString()}
          </p>
          <p>people vaccinated</p>
        </div>
      </div>
      <section className="continents-section">
        <h3>STATS BY CONTINENTS</h3>
        <div className="card-holder">
          {continentsList.map((continent) => {
            const { name, value, id } = continent;
            if (name !== 'undefined') {
              return (
                <div key={id} className="card">
                  <div className="map-img-box">
                    <img
                      src={mapState.find((map) => map.name === name).mapUrl}
                      alt={name}
                      className="map-image"
                    />
                  </div>
                  <NavLink to={`/countries/${name}`} style={forwardStyle}>
                    <BsArrowRightCircle />
                  </NavLink>
                  <div className="map-text-box">
                    <h2>{name}</h2>
                    <p>{value.toLocaleString()}</p>
                  </div>
                </div>
              );
            }
            return '';
          })}
        </div>
      </section>
    </div>
  );
};

export default Continents;
