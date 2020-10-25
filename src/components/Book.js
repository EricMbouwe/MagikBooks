import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ details }) => (
  <>
    <tr>
      <td>{details.id}</td>
      <td>{details.title}</td>
      <td>{details.category}</td>
    </tr>
  </>
);

export default Book;

Book.propTypes = {
  details: {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  },
};
