import React from "react";

export default function List({ list }) {
  const itemList = list.map((item) => {
    return <h2>{item}</h2>;
  });

  return <div>{itemList}</div>;
}
