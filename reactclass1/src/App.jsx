import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Classwork from "./components/Classwork";
import Increment from "./components/Increment";
import Workingwithobjects from "./components/Workingwithobjects";

/*class App extends Component {
render() {
    return <>
    </>;
  }
}
*/
 const App=()=>{

  return(
    <>
    <Classwork></Classwork>
    <Increment></Increment>
    <Workingwithobjects></Workingwithobjects>
    </>
  )
 }


export default App;
