import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Add data state here
    };
  }

  // Code your API request here

  render() {
    return (
      <div className="App">
        <h1>TAXI DRIVERS LICENSE STATUS </h1>
        <section className="list">{/* PUT API RESPONSE DATA HERE */}</section>
      </div>
    );
  }
}

export default App;
