import React, { useState, useEffect } from "react";
import axios from "../../app-2/node_modules/axios";
import { Link } from "react-router-dom";

export default function PokemonList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=20")
      .then((res) => {
        setList(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {list.map((i, index) => {
        return (
          <Link to={`/pokemon/${i.name}`} key={index}>
            <h2>{i.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
