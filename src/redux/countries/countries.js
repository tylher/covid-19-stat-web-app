import { BASE_URL } from '../continents/continents';

const GET_COUNTRIES = 'GET_COUNTRIES';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.data.filter((country) => country.continent === action.continent);

    default: return state;
  }
};

const getCountries = (continent, data) => ({ type: GET_COUNTRIES, continent, data });

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
      keys.forEach((i) => {
        const {
          continent,
          people_vaccinated: peopleVaccinated,
          people_partially_vaccinated: peoplePartiallyVaccinated,
          administered,
          population,
          life_expectancy: lifeExpectancy,
        } = data[i].All;
        countriesData.push({
          continent,
          peopleVaccinated,
          peoplePartiallyVaccinated,
          administered,
          population,
          lifeExpectancy,
        });
      });
      dispatch(getCountries(continent, countriesData));
    });
};
export default reducer;
