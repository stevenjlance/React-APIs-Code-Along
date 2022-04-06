import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Getting API Data!</h1>
        <section className="list">{/* PUT API RESPONSE DATA HERE */}</section>
      </div>
    );
  }
}

export default App;
