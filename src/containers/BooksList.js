import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilterAction } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, deleteBook, changeFilter, filter }) => {
  const handleRemoveBook = book => {
    deleteBook(book);
  };

  const handleFilterChange = (filterValue) => {
    changeFilter(filterValue)
  }

  return (
    <div>
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
          {filter !== 'All' ?
            books
              .filter(book => book.category === filter)
              .map(book => (
                <tr key={book.id}>
                  <Book book={book} handleDelete={handleRemoveBook} />
                </tr>
              )) : books.map(book => (
                <tr key={book.id}>
                  <Book book={book} handleDelete={handleRemoveBook} />
                </tr>))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state,
  filter: state
});

const mapDispatchToProps = dispatch => ({
  deleteBook: book => {
    dispatch(removeBook(book));
  },
  changeFilter: filterValue => {
    dispatch(changeFilterAction(filterValue));
  },
});


BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
