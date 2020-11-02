import React, { Component } from 'react';
import { createBook } from '../actions/index'

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '' 
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit() {
    this.setState((state) => {
      const currentBook = state
      submitNewBook(currentBook)
      return {
        input: '',
        category: '',
      };
    });
  }

  render() {
    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];

    const { title } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="title">
            Title :
            <input
              type="text"
              value={title}
              onChange={this.handleChange}
              id="title"
            />
          </label>
          <select name="categories" id="category">
            {categories.map(category => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewBook: (newBook) => {
      dispatch(createBook(newBook));
    },
  };
};

export default connect(mapDispatchToProps)(BooksForm);
