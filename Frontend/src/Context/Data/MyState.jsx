import React, { createContext, useState } from "react";

// Create a context
const MyContext = createContext();

function MyState(props) {
  // Set up state or any other logic you need

  // Replace 'defaultValue' with the initial value for your context
  const [myStateValue, setMyStateValue] = useState("defaultValue");

  return (
    <MyContext.Provider value={{ myStateValue, setMyStateValue }}>
      {props.children}
    </MyContext.Provider>
  );
}

export { MyContext, MyState };
