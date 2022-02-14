import { Component } from 'react';

import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

import styles from './app.module.css';

export class App extends Component {
  state = {
    // contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  typeContactData(ev) {
    const name = ev.target.name;
    this.setState({
      [name]: ev.target.value,
    });
  }

  addContactBtn() {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: prevState.name, number: prevState.number },
        ],
      };
    });
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.contactContainer}>
          <h3>Name</h3>
          <ContactForm
            typeContactData={this.typeContactData.bind(this)}
            addContactBtn={this.addContactBtn.bind(this)}
          />
        </div>

        <div className={styles.listContainer}>
          <h2>Contacts</h2>
          <Filter typeContactData={this.typeContactData.bind(this)} />
          <ContactList contacts={this.state.contacts} filter={this.state.filter} />
        </div>
      </div>
    );
  }
}
