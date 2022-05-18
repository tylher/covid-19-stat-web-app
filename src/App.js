import { useDispatch } from 'react-redux';
import './App.css';
import Continents from './components/continents/Continents';
import Header from './components/Header/Header';
import { getAsynccontinents } from './redux/continents/continents';

function App() {
  const dispatch = useDispatch();
  dispatch(getAsynccontinents());

  return (
    <>
      <Header />
      <Continents />
    </>
  );
}

export default App;
