import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/configureStore';
import Continents from '../../components/continents/Continents';
import Countries from '../../components/countries/countries';
import App from '../../App';

describe('test snapshots for all components', () => {
  it('renders Continents page correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Continents />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders countries page correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Countries />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders App correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            {' '}
            <App />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
