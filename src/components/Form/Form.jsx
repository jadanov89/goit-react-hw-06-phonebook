import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../Redux/Contacts/contacts-selector';
import { addContact } from '../../Redux/Contacts/contacts-slice';
import AddForm from './Form.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const currentContacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const existingContact = currentContacts.find(
      contact => name === contact.name
    );

    if (existingContact) {
      return alert(`${name} is already in contacts .`);
    }

    const newContact = { name, number };
    dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <AddForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">
          Name
          <input
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Number
          <input
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Add contact</button>
    </AddForm>
  );
}
