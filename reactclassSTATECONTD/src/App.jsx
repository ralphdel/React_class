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

  togglepersohandler = () => {
    const availablepersons = this.state.showpersons;
    this.setState({
      showpersons: !availablepersons,
    });
  };

  render() {
    return (
      <>
        <button onClick={() => this.togglepersohandler()}>Showperson</button>

        {
          (this.state.showpersons ? (
            <div>
              {this.state.persons.map((Eachperson) => {
                return (
                  <Person name={Eachperson.name} age={Eachperson.age}></Person>
                );
              })}
            </div>
          ) : (
            <h4>click the buttton to view the available persons </h4>
          ))
        }
      </>
    );
  }
}

export default App;
