import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleChange }) => {
  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const handleSelection = (e) => {
    handleChange(e)
  }

  return (
    <div>
      <select name="category" id="category"
        onChange={handleSelection}>
        {categories.map(category => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
}