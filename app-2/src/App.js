import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Results from "./Results";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=20"
      );
      setPokemon(data.results);
    }
    getPokemon();
  }, []);

  return (
    <div className="App">
      <Results pokemon={pokemon} />
    </div>
  );
}

export default App;
