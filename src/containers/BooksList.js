import React, { Component } from 'react';

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
            <tr>
              <td>001</td>
              <td>Dbz</td>
              <td>Anime</td>
            </tr>
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
