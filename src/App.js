import React, { Component } from "react";
import ContactGroup from "./components/contacts/ContactGroup";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
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
            <AddContact />
            <ContactGroup />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
