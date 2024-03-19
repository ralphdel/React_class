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

  togglepersonHandler = () => {
    const availablepersons = this.state.persons;

    this.setState({
      persons: availablepersons,
    });
  };
  render() {
    return (
      <>
      <button onClick={() => this.togglepersonHandler}>Show persons</button>
        {{togglepersonHandler}? (
          this.state.persons.map((Eachperson) => {
            <Person name={Eachperson.name} age={Eachperson.age}></Person>;
          })
        ) : (
          <p>Kindly click the button to see persons </p>
        )}
      </>
    );
  }
}

export default App;
