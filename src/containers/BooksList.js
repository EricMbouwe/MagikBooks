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
    <div className='container'>
      <CategoryFilter handleChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>CATEGORY</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map(book => (
            <tr key={book.id}>
              <Book book={book} handleDelete={handleRemoveBook} />
            </tr>
          ))}
        </tbody>
      </table>
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
