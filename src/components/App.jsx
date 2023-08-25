import React from 'react';
import Form from './Form/Form';
import { Filter } from './Filter/Filter';
import List from './List/List';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <List />
    </div>
  );
}
