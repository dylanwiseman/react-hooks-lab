import AddTodo from "./AddTodo";
import List from "./List";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, value]);
    setValue("");
  };

  return (
    <div className="App">
      <AddTodo
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <List list={list} />
    </div>
  );
}

export default App;
