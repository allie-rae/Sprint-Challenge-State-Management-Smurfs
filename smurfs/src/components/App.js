import React, { Component } from "react";
import "./App.css";
import DisplaySmurfs from "./DisplaySmurfs";
import SmurfForm from "./SmurfForm";


class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplaySmurfs />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
