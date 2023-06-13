import './App.css';
import {useState} from 'react';
import DisplayPokemon from './components/DisplayPokemon';
import axios from 'axios';


const style = {
  marginLeft: '45%',
}

function App() {

  const [fetchPokemon, setFetchPokemon] = useState(false)

  const getData = () => {

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        const pokeNames = response.data.results.map(r => r.name)
        setFetchPokemon(pokeNames)

        console.log(response)})
        .catch(err=> console.log(err))

  }


  return (
    <div style={style}>
      <button onClick={getData}>Fetch Pokemon</button> <br/>
      {
        fetchPokemon ? 
        <DisplayPokemon fetchPokemon={fetchPokemon}/> :
        <p>Click to fetch pokemon</p>
      }

    </div>
  );
}

export default App;
