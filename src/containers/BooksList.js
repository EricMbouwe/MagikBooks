import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <div>
    <table>
      <thead>
        <th>ID</th>
        <th>TITLE</th>
        <th>CATEGORY</th>
      </thead>
      <tbody>
        {books.map(book => (
          <Book details={book} key={book.id} />
        ))}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};
