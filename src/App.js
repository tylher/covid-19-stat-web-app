import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import './App.css';
import Continents from './components/continents/Continents';
import Countries from './components/countries/countries';
import Header from './components/Header/Header';
import { getAsynccontinents } from './redux/continents/continents';

function App() {
  const dispatch = useDispatch();
  dispatch(getAsynccontinents());

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/countries/:continent" element={<Countries />} />
      </Routes>
    </>
  );
}

export default App;
