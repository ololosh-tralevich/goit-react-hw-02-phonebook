import { Component } from 'react';

import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';

import styles from './app.module.css';


export class Options extends Component {
  state = {
    contacts: [],
    name: '',
  };
}

export const App = () => {
 return (
   <div className={styles.mainContainer}>
     <ContactForm />
     {/* <Filter ... /> */}
   <ContactList state={ContactForm.state}/>
   </div>
 );
};
// export State;


// export default App;