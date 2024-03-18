import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Validation from "./Validation";

class App extends Component {

state=({
  userinput:''
})

namechangehandler=(event)=>{
  this.setState({
    userinput:event.target.value
  })
}



//this.setState({
 // userinput:'newtext'
//})


  render() {
    return <>
     <h3>Task 1 </h3>
     <input type="text" onChange={()=> this.namechangehandler(event)}   />
     <p>My text length is:{this.state.userinput.length} </p>
     <Validation inputlenght={this.state.userinput.length}></Validation>
    </>;
  }
}

export default App;
