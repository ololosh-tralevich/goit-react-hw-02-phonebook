import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

import styles from './app.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  typeContactData(ev) {
    const name = ev.target.name;
    this.setState({
      [name]: ev.target.value,
    });
  }

  addContactBtn() {
    const clone = this.state.contacts.find(
      clone =>
        clone.name === this.state.name || clone.number === this.state.number
    );
    this.setState(prevState => {
      return clone
        ? alert(`${this.state.name} is already in your contacts`)
        : {
            contacts: [
              ...prevState.contacts,
              { id: nanoid(), name: prevState.name, number: prevState.number },
            ],
          };
    });
  }

  // findCloneContact(name) {
  //   console.log(name)
  //   console.log(this.state.contacts)
  //   return  this.state.contact === name;
  // }

  deleteContactBtn(ev) {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== ev.target.id
        ),
      };
    });
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.contactContainer}>
          <ContactForm
            typeContactData={this.typeContactData.bind(this)}
            addContactBtn={this.addContactBtn.bind(this)}
          />
        </div>

        <div className={styles.listContainer}>
          <h2>Contacts</h2>
          <Filter typeContactData={this.typeContactData.bind(this)} />
          <ContactList
            deleteContactBtn={this.deleteContactBtn.bind(this)}
            contacts={this.state.contacts}
            filter={this.state.filter}
          />
        </div>
      </div>
    );
  }
}
