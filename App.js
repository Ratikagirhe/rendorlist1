import React from "react";
import Item from "./item";

const App = () => {
  const items = [" ratika", "kiran", "rutika","anu"];

  return (
    <div>
      <h1>Name List</h1>
      <ul>
        {items.map((item, index) => (
          <Item key={index} name={item} />
        ))}
      </ul>
    </div>
  );
};

export default App;
