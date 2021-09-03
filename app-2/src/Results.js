import React from "react";

export default function Results({ pokemon }) {
  return (
    <div>
      {pokemon.map((i, index) => {
        return <h2 key={index}>{i.name}</h2>;
      })}
    </div>
  );
}
