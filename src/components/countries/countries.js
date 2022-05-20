import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { mapState } from '../../redux/continents/continents';
import { getCountriesData } from '../../redux/countries/countries';
import './countries.css';

const Countries = () => {
  const dispatch = useDispatch();
  const { continent: name } = useParams();

  useEffect(() => {
    dispatch(getCountriesData(name));
  }, [dispatch, name]);

  const countryList = useSelector((state) => state.countries);
  return (
    <div className="continent-container">
      <div className="continent-headline">
        <img className="headline-img" src={mapState.find((item) => (item.name === name)).mapUrl} alt="" />
      </div>
      <div className="countries-row">
        {countryList.map((item) => {
          const { country, peopleVaccinated } = item;
          return (
            <div key={item.id} className="country-card">
              <div className="flag-img-box">
                <img
                  className="flag-img"
                  src={`https://countryflagsapi.com/svg/${country}`}
                  alt={country}
                />
              </div>
              <h4>{country}</h4>
              <p>{peopleVaccinated}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
