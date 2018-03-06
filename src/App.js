import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardStack, Card } from "react-cardstack";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Welcome to React or Whatever </h1>{" "}
        </header>{" "}
        <CardStack
          height={1000}
          width={1000}
          background="#f8f8f8"
          hoverOffset={25}
        >
          <Card background="#2980B9">
            <h1>Number 1</h1>
          </Card>

          <Card background="#27AE60">
            <h1>Number 2</h1>
          </Card>
          <Card background="#27CB60">
            <h1>Number 3</h1>
          </Card>
          <Card background="#CBAE60">
            <h1>Number 4</h1>
          </Card>
        </CardStack>
      </div>
    );
  }
}

export default App;
