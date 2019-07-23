import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  //example of using state in class component:
  constructor() {
    super(); //responsible for calling constructor method on component class, enabling
    //access to state
    this.state = {
      monsters: [
        //no need to hard code due to api call
      ]
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") //promise
      .then(response => response.json()) //conversion to json then take users to display users
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        {//to render the names of monster in h1 tag via map, map is an iteration of the elements in the array
        this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
