import {Options} from '../App';

import styles from './contactList.module.css';

class ContactList extends Options {
  // const ContactList = (state) => {

  render() {
    console.log(this.state);
    return (
      <div className={styles.mainContainer}>
        <h2>Contacts</h2>
      </div>
    );
  }
}

export default ContactList;
