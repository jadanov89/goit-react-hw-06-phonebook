import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts } from '../../Redux/Contacts/contacts-selector';
import AddForm from './Form.styled';


export default function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const currentContacts = useSelector(getContacts);

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

    addContact({ name, number });

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

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};