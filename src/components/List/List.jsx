import React from 'react';
import PropTypes from 'prop-types';
import UlList from './List.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'Redux/Contacts/contacts-selector';
import { getFilter } from 'Redux/Filter/filter-selector';
import { deleteContact } from 'Redux/Contacts/contacts-slice'; // Виправлено імпорт

const List = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <UlList>
      {getFilteredContacts().map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </UlList>
  );
};

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default List;
