import { nanoid } from 'nanoid';

import styles from './contactList.module.css';

const ContactList = ({ contacts, filter }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const partOfCode = filteredContacts.map(contact => {
    return (
      <li key={nanoid()}>
        {contact.name}: {contact.number}
      </li>
    );
  });

  // const partOfCode = contacts.filter(contact => {
  //   console.log(contact);
  // });
  // console.log(partOfCode);

  return (
    <div className={styles.mainContainer}>
      <ul>{partOfCode}</ul>
    </div>
  );
};

export default ContactList;
