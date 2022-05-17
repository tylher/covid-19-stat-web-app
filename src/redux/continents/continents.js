const GET_CONTINENTS = 'GET_CONTINENTS';
const reducer = (state = [],
  action) => {
  switch (action.type) {
    case GET_CONTINENTS: return action.continents;
    default: return state;
  }
};
const BASE_URL = 'https://covid-api.mmediagroup.fr/v1/vaccines';

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
      const continentsData = [];
      const keys = Object.keys(data);
      keys.forEach((i) => {
        const { continent, people_vaccinated: peopleVaccinated } = data[i].All;
        if (continentsData[continent]) {
          continentsData[continent]
            += peopleVaccinated;
        } else {
          continentsData[continent] = peopleVaccinated;
        }
        dispatch(getContinents(continentsData));
      });
    });
};

export default reducer;
