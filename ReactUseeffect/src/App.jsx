import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(2);
  

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [calculation]); //useeffect takes a function a a depency..
  //everything in useEffect only get triggered when components gets rendered

  


  return (
    <>
      <h2> USE_EFFECT PRACTISE </h2>
      <div> 
        <h1> This is my Count:{count}</h1>
      </div>
      <div>
        <button  onClick={()=>{setCalculation(calculation *4 )}}> Multiply</button>
        <h3> Calculation:{calculation}</h3>
      </div>
    </>
  );
};
export default App;
