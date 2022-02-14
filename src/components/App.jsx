import { Component } from 'react';

import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';

import styles from './app.module.css';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  typeContactName(ev) {
    const name = ev.target.name;
    this.setState({
      [name]: ev.target.value,
    });
  }

  addContactBtn() {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, {name: prevState.name, number: prevState.number}] };
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div className={styles.mainContainer}>
        <ContactForm
          typeContact={this.typeContactName.bind(this)}
          addContactBtn={this.addContactBtn.bind(this)}
        />
        {/* <Filter ... /> */}
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
