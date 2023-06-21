import './App.css';
import SearchForm from './components/SearchForm';
import { Routes, Route } from 'react-router-dom';
import PeopleDisplay from './components/PeopleDisplay';
import PlanetsDisplay from './components/PlanetsDisplay';
import Error from './components/Error';

function App() {

  

  return (
    <div className="App">
      <h1>Luke API Walker</h1>
      <SearchForm />
      <Routes>
        <Route path='/people/:id' element={<PeopleDisplay />} />
        <Route path='/planets/:id' element={<PlanetsDisplay />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </div>
  );
}


export default App;
