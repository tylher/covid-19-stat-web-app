import deepFreeze from 'deep-freeze';
import reducer, { getCountries } from '../../../redux/countries/countries';

describe('Test reducer function and actions', () => {
  const prevState = [];
  const testData = [
    {
      continent: 'Africa',
      peopleVaccinated: 300,
      country: 'Ghana',
    },
    {
      continent: 'North America',
      peopleVaccinated: 500,
      country: 'USA',
    },
    {
      continent: 'Africa',
      peopleVaccinated: 900,
      country: 'Cameroun',
    },
    {
      continent: 'South America',
      peopleVaccinated: 200,
      country: 'Brazil',
    },
  ];

  it('filter using a continent', () => {
    deepFreeze(prevState);
    expect(reducer(prevState, getCountries('Africa', testData)).length).toBe(2);
    expect(reducer(prevState, getCountries('South America', testData)).length).toBe(1);
    expect(reducer(prevState, getCountries('Oceania', testData)).length).toBe(0);
    expect(reducer(prevState, getCountries('Europe', testData)).length).toBe(0);
  });
});
