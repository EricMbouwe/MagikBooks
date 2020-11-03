import React from "react";
import PropTypes from "prop-types";

const Book = ({ book, handleDelete }) => (
  <>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button onClick={() => handleDelete(book)}>Remove Book</button>
    </td>
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
