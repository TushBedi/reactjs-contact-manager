import React, { Component } from "react";
import ContactGroup from "./components/ContactGroup";
import Header from "./components/Header";
import { Provider } from "./Context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header brand="Contact Manager" />
          <div className="container">
            <ContactGroup />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
