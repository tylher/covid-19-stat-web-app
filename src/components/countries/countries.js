import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountriesData } from '../../redux/countries/countries';
import './countries.css';

const Countries = () => {
  const dispatch = useDispatch();
  const { continent: name } = useParams();

  useEffect(() => {
    dispatch(getCountriesData(name));
  }, []);

  const countryList = useSelector((state) => state.countries);
  return (
    <div>
      {countryList.map((item) => {
        const { country, peopleVaccinated } = item;
        return (
          <div key={item.id}>
            <h4>{country}</h4>
            <img
              src={`https://countryflagsapi.com/svg/${country}`}
              alt={country}
            />
            <p>{peopleVaccinated}</p>
          </div>
        );
      })}

    </div>
  );
};

export default Countries;
