import React from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
// import { useDispatch, useSelector } from 'react-redux';
// import { createContact, deleteContact } from '../redux/actions/contactsAction';
// import { filterContacts } from '../redux/actions/filterAction';

import s from './App.module.css';

// const CONTACTS = 'contacts';

// const getLocalData = () => JSON.parse(localStorage.getItem(CONTACTS));

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const App = () => {
  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts);
  // const filter = useSelector(state => state.filter);
  // const [contacts, setContacts] = useState(
  //   () => getLocalData() ?? initialContacts
  // );

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(CONTACTS, JSON.stringify(contacts));
  // }, [contacts]);

  // const handeleAddContact = data => {
  //   const newContact = { ...data };
  //   const contactName = data.name.toLowerCase();
  //   if (
  //     contacts.find(recordName => recordName.name.toLowerCase() === contactName)
  //   ) {
  //     alert(`${data.name} is already in contacts.`);
  //     return;
  //   } else {
  //     dispatch(createContact(newContact));
  //   }

  //   // setContacts(prevContacts => [...prevContacts, data]);
  // };

  // const handleFilter = ({ target: { value } }) => {
  //   dispatch(filterContacts(value));
  // };

  // const handleDelete = toDelete => {
  //   dispatch(deleteContact(toDelete));
  // };

  // варіант без useMemo
  // const normalizedFilter = filter.toLowerCase();

  // const filterContactsPhone = contacts?.filter(recordName =>
  //   recordName.name.toLowerCase().includes(normalizedFilter)
  // );

  // const filterContacts = useMemo(() => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(recordName =>
  //     recordName.name.toLowerCase().includes(normalizedFilter)
  //   );
  // }, [contacts, filter]);

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
