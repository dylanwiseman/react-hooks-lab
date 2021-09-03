import React from "react";

export default function AddTodo({ value, handleChange, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={value} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
