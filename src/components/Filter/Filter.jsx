import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../Redux/Filter/filter-selector';
import { setFilter } from '../../Redux/Filter/filter-slice';
import FilterLabel from './Filter.styled';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContacts = event => {
    const action = setFilter(event.currentTarget.value);
    dispatch(action);
  };

  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" value={value} onChange={filterContacts} />
    </FilterLabel>
  );
};

