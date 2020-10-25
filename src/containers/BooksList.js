import React, { Component } from 'react';
import Book from '../components/Book'

class BooksList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <th>ID</th>
            <th>TITLE</th>
            <th>CATEGORY</th>
          </thead>
          <tbody>
            <Book />
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { books: state };
};

export default BooksList;
