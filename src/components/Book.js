import React from "react";
import PropTypes from "prop-types";

const Book = ({ details }) => (
  <>
    <td>{details.id}</td>
    <td>{details.title}</td>
    <td>{details.category}</td>
  </>
);

export default Book;

Book.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
