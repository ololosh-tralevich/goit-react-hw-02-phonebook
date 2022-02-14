import { nanoid } from 'nanoid'


import styles from './contactList.module.css';

const ContactList = ({ contacts }) => {
  console.log(contacts)

  const partOfCode = contacts.map(contact => {
    return <li key={nanoid()}>{contact.name}: {contact.number}</li>
  })

  return (
    <div className={styles.mainContainer}>
      <h2>Contacts</h2>
      <ul>{partOfCode}</ul>
    </div>
  );
};

export default ContactList;
