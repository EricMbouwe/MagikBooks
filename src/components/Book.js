import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <tr>
          <td>{this.props.details.id}</td>
          <td>{this.props.details.title}</td>
          <td>{this.props.details.category}</td>
        </tr>
      </div>
    );
  }
}

export default Book;
