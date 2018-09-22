import React, { Component } from "react";
import Contact from "./Contact";

class ContactGroup extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     contacts: [
  //       {
  //         id: 1,
  //         name: "Agus Lukito",
  //         email: "alukito@gmail.com",
  //         phone: "081-123-4567"
  //       },
  //       {
  //         id: 2,
  //         name: "Bambang Sulistiyo",
  //         email: "bsulistiyo@gmail.com",
  //         phone: "081-678-9100"
  //       },
  //       {
  //         id: 3,
  //         name: "Cecep Rais",
  //         email: "crais@gmail.com",
  //         phone: "081-867-8910"
  //       },
  //       {
  //         id: 4,
  //         name: "Doni Legit",
  //         email: "dlegit@gmail.com",
  //         phone: "081-222-3333"
  //       }
  //     ]
  //   };
  // }

  // Disederhanakan sbb:
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
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default ContactGroup;
