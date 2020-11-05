import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleDelete }) => (
  <>
    <div className='book-infos'>
      <div className='infos'>
        <small className='category'>{book.category}</small>
        <p className='book-title'>{book.title}</p>
        <small className='author'>Author</small>
      </div>
      <div className='actions'>
        <button onclick={() => handleDelete(book)}>Comment</button>
        <button onclick={() => handleDelete(book)}>Remove</button>
        <button onclick={() => handleDelete(book)}>Edit</button>
      </div>
    </div>

    <div className='book-status'>
      <div className='loading-icon'></div>
      <div className='percentage'>
        <p>64%</p>
        <p>Completed</p>
      </div>
    </div>

    <div className='progress-status'>
      <p>CURENT CHAPTER</p>
      <p>Chapter 17</p>
      <button type='button'>UPDATE PROGRESS</button>
    </div>
  </>
);

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
