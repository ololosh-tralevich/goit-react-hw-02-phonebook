import { Options } from '../App';

import { nanoid } from 'nanoid';


import styles from './contactForm.module.css';

class ContactForm extends Options {
  typeContactName(ev) {
    this.setState({ name: ev.target.value });
    console.log(this.state);
  }

  // addContactBtn() {
    //   this.setState(prevState => {
      //     const newContact = { name: prevState.name, id: nanoid() };
      //     return { contacts: [...prevState.contacts, newContact] };
  //   });
  // }

  render() {
    return (
      <div className={styles.mainContainer}>
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.typeContactName.bind(this)}
          />
        <button
          className={styles.addContactBtn}
          onClick={this.addContactBtn.bind(this)}
          >
          Add contact
        </button>
      </div>
    );
  }
}

export default ContactForm;
