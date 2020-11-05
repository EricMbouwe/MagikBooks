import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilterAction } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, deleteBook, changeFilter, filter,
}) => {
  const handleRemoveBook = book => {
    deleteBook(book);
  };

  const handleFilterChange = e => {
    const selectedValue = e.target.value;
    changeFilter(selectedValue);
  };

  const filteredBooks = filter !== 'All' ? books
    .filter(book => book.category === filter) : books

  return (
    <div>
      <CategoryFilter handleChange={handleFilterChange} />
      <div className='container' style={{marginTop: '30px'}}>
        {filteredBooks.map(book => (
          <div key={book.id} className='book-wrapper'>
            <Book book={book} handleDelete={handleRemoveBook} />
          </div>
        ))}
        <hr style={{
          border: 'solid 1px #e8e8e8', margin: '30px 0'}}/>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: book => {
    dispatch(removeBook(book));
  },
  changeFilter: selectedValue => {
    dispatch(changeFilterAction(selectedValue));
  },
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
