import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Add data state here
      data: []
    };
  }

  // Code your API request here
  componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/dpec-ucu7.json?$$app_token=2y6eroq5UDtsqbdRlo8SOA9rt&status=Incomplete"
    );
    // convert response to JSON
    .then(response => response.json())
    .then(data => {this.setState({data: data});
    console.log(this.state.data)
    })
  
  
      
  };

  render() {
    return (
      <div className="App">
        <h1>🚕 TAXI DRIVERS LICENSE STATUS 🚕</h1>
        <section className="list">{/* PUT API RESPONSE DATA HERE */}
        {this.state.data.map(applicatio)=> (
        <li>
          application.app_no}
          :
          {application.other_requirments}</li>)}
        </section>
      </div>
    );
  }
}

export default App;
