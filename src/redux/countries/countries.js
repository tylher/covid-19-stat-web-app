import { v4 as uuidv4 } from 'uuid';
import { BASE_URL } from '../continents/continents';

const GET_COUNTRIES = 'GET_COUNTRIES';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.data.filter(
        (country) => country.continent === action.continent,
      );
    default:
      return state;
  }
};

export const getCountries = (continent, data) => ({
  type: GET_COUNTRIES,
  continent,
  data,
});

export const getCountriesData = (continent) => (dispatch) => {
  fetch(BASE_URL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const countriesData = [];
      const keys = Object.keys(data);
      keys.map((i) => {
        const {
          continent,
          people_vaccinated: peopleVaccinated,
          people_partially_vaccinated: peoplePartiallyVaccinated,
          administered,
          population,
          life_expectancy: lifeExpectancy,
          country,
        } = data[i].All;
        countriesData.push({
          id: uuidv4(),
          continent,
          peopleVaccinated,
          peoplePartiallyVaccinated,
          administered,
          population,
          lifeExpectancy,
          country,
        });
        return '';
      });
      dispatch(getCountries(continent, countriesData));
    });
};
export default reducer;
