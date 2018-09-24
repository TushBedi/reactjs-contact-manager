import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Agus Lukito",
        email: "alukito@gmail.com",
        phone: "081-123-4567"
      },
      {
        id: 2,
        name: "Bambang Sulistiyo",
        email: "bsulistiyo@gmail.com",
        phone: "081-678-9100"
      },
      {
        id: 3,
        name: "Cecep Rais",
        email: "crais@gmail.com",
        phone: "081-867-8910"
      },
      {
        id: 4,
        name: "Doni Legit",
        email: "dlegit@gmail.com",
        phone: "081-222-3333"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
