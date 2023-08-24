import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form  from './Form/Form';
import { Filter } from './Filter/Filter';
import { List } from './List/List'; // Додав імпорт
import { getContacts } from '../Redux/Contacts/contacts-selector';
import { getFilter } from '../Redux/Filter/filter-selector';
import { addContact, deleteContact } from '../Redux/Contacts/contacts-slice';


export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onAddContact = contact => {
    const action = addContact(contact);
    dispatch(action);
  };

  const onDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  // Видаліть filterContacts, оскільки ви його не використовуєте

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form addContact={onAddContact} />
      <h2>Contacts</h2>
      <Filter />
      <List contacts={getFilteredContacts()} deleteContact={onDeleteContact} />
    </div>
  );
}
