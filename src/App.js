import { useEffect } from 'react';
import './App.css';
import { getAsynccontinents } from './redux/continents/continents';

function App() {
  useEffect(getAsynccontinents());

  return (
    <>My App</>
  );
}

export default App;
