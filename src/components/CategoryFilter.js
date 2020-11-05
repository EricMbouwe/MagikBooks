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
    <div className='' style={{ borderBottom: '1px solid #e8e8e8', backgroundColor: '#fff' }}>
      <div className='panel-bg container'>
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
        <span className='icon'>icon</span>
      </div>
    </div>
  );
};

export default CategoryFilter;

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
