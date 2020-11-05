import React from 'react';
import PropTypes from 'prop-types';
import './CategoryFilter.css'

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

  const handleSelection = e => {
    handleChange(e);
  };

  return (
    <div className='panel-bg'>
      <h1 className='title'>Bookstore CMS</h1>
      <h4 className='books'>BOOKS</h4>
      <select
        name="category"
        id="category"
        onChange={handleSelection}
        className='categories'
      >
        {categories.map(category => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
