import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>{this.props.book.id}</span>
        <span>{this.props.book.title}</span>
        <span>{this.props.book.category}</span>
      </div>
    );
  }
}

export default Book;
