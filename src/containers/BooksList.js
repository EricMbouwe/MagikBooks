import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book'

class BooksList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { books } = this.props

    return (
      <div>
        <table>
          <thead>
            <th>ID</th>
            <th>TITLE</th>
            <th>CATEGORY</th>
          </thead>
          <tbody>
            {books.map(book => {
              return <Book details={book} key={book.id} />
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books
});

export default connect(mapStateToProps)(BooksList);
