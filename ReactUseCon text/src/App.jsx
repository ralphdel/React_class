import { createContext, useState } from "react";
import "./App.css";
import ComponentB from "./ComponentB";
import ComponentD from "./ComponentD";

export const Mycontext = createContext();
const App = () => {
  const [name, setName] = useState("Ralph");
  return (
    <>
      <div className="box">
        <h3>Component A </h3>
        <p> Welcome {name}</p>
      </div>
      <ComponentB />

      <Mycontext.Provider value={name}>
        <ComponentD name={name} />
      </Mycontext.Provider>
    </>
  );
};

export default App;
