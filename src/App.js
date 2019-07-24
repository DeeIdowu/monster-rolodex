import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/Cardlist";
import { Searchbox } from "./components/searchbox/Searchbox";

class App extends Component {
  //example of using state in class component:
  constructor() {
    super(); //responsible for calling constructor method on component class, enabling
    //access to state
    this.state = {
      monsters: [],
      searchField: ""
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") //promise
      .then(response => response.json()) //conversion to json then take users to display users
      .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Searchbox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
