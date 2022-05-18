import { v4 as uuidv4 } from 'uuid';

const GET_CONTINENTS = 'GET_CONTINENTS';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_CONTINENTS:
      return action.continents;
    default:
      return state;
  }
};
export const BASE_URL = 'https://covid-api.mmediagroup.fr/v1/vaccines';

const getContinents = (continents) => ({ type: GET_CONTINENTS, continents });

export const getAsynccontinents = () => (dispatch) => {
  fetch(BASE_URL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const continents = [];
      let continentsData = [];
      const keys = Object.keys(data);
      keys.forEach((i) => {
        const { continent, people_vaccinated: peopleVaccinated } = data[i].All;
        if (continents[continent]) {
          continents[continent] += peopleVaccinated;
        } else {
          continents[continent] = peopleVaccinated;
        }
      });
      continentsData = Object.entries(continents).map(([key, value]) => ({
        id: uuidv4(),
        name: key,
        value,
      }));
      dispatch(getContinents(continentsData));
    });
};

export default reducer;
