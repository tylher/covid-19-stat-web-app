import deepFreeze from 'deep-freeze';
import continents, { getContinents } from '../../../redux/continents/continents';

describe('test reducer and action functions', () => {
  const prevState = [];
  const newState = [
    {
      id: 1,
      name: 'spaceR',
      value: 'utuvassxohaosxjhvucyssx',
    },
    {
      id: 2,
      name: 'ship5',
      value: 'o8hphwx09whx9877g7fd65w',
    },
    {
      id: 3,
      name: 'craftUR',
      value: 'ujbouodc77t87r',
    },
  ];

  it('test getContinents action', () => {
    const apiData = [
      {
        id: 1,
        name: 'spaceR',
        value: 'utuvassxohaosxjhvucyssx',
      },
      {
        id: 2,
        name: 'ship5',
        value: 'o8hphwx09whx9877g7fd65w',
      },
      {
        id: 3,
        name: 'craftUR',
        value: 'ujbouodc77t87r',
      },
    ];

    deepFreeze(prevState);
    expect(continents(prevState, getContinents(apiData))).toEqual(newState);
  });
});
