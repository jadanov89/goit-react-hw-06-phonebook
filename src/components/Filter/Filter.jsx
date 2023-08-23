
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilter } from '../../Redux/Filter/filter-selector';
import FilterLabel from './Filter.styled';

export const Filter = ({ onFilterChange }) => {
  const value = useSelector(getFilter);
  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" value={value} onChange={onFilterChange} />
      </FilterLabel>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};


