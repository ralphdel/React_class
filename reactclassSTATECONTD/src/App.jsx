import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Person from "./Person";

class App extends Component {
  state = {
    persons: [
      { name: "Ralph", age: 12 },
      { name: "Dami", age: 10 },
      { name: "Seun", age: 8 },
    ],
    showpersons: false,
  };

  /*togglePerson=()=>{
  this.setState({
    
  })
  }
*/
  render() {
    return (
      <>
        {this.state.persons.map((Eachperson) => {
          return <Person name={Eachperson.name} age={Eachperson.age}></Person>;
        })}
        <button  >Showperson</button>
      </>
    );
  }
}

export default App;
