import { v4 as uuidv4 } from 'uuid';
import asia from '../../images/asia.png';
import africa from '../../images/africa.png';
import northAmerica from '../../images/north-america.png';
import southAmerica from '../../images/south-america.png';
import europe from '../../images/europe.png';
import oceania from '../../images/oceania.png';

export const mapState = [
  { name: 'Asia', mapUrl: asia },
  { name: 'Africa', mapUrl: africa },
  { name: 'Europe', mapUrl: europe },
  { name: 'South America', mapUrl: southAmerica },
  { name: 'North America', mapUrl: northAmerica },
  { name: 'Oceania', mapUrl: oceania },
];

const GET_CONTINENTS = 'GET_CONTINENTS';
const ADD_MAPS = 'ADD_MAPS';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_CONTINENTS:
      return action.continents;
    default:
      return state;
  }
};
export const BASE_URL = 'https://covid-api.mmediagroup.fr/v1/vaccines';

export const getContinents = (continents) => ({ type: GET_CONTINENTS, continents });

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

export const addMaps = () => ({
  type: ADD_MAPS,
});

export default reducer;
