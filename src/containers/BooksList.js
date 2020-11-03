import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Book from "../components/Book";

const BooksList = ({ books }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>CATEGORY</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <Book details={book} />
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// const mapStateToProps = (state) => ({
//   books: state.books,
// });

const mapStateToProps = (state) => ({
  books: state,
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(BooksList);
