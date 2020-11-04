import React from 'react';
// import PropTypes from 'prop-types';

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

  

  return (
    <div>
      <select name="category" id="category"
        onChange={handleChange}>
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

// CategoryFilter.propTypes = {

// }