import { useDispatch } from 'react-redux';
import './App.css';
import { getAsynccontinents } from './redux/continents/continents';

function App() {
  const dispatch = useDispatch();
  getAsynccontinents(dispatch);

  return (
    <>My App</>
  );
}

export default App;
