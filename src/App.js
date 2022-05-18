import { useDispatch } from 'react-redux';
import './App.css';
import Continents from './components/continents/Continents';
import { getAsynccontinents } from './redux/continents/continents';

function App() {
  const dispatch = useDispatch();
  dispatch(getAsynccontinents());

  return (
    <>
      <Continents />
    </>
  );
}

export default App;
