import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const currentBook = this.state;
    const { submitNewBook } = this.props;
    submitNewBook(currentBook);
    this.setState({
      title: '',
      category: 'Action',
    });
  };

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
    const { category } = this.state;

    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Title :
            <input
              type="text"
              value={title}
              onChange={this.handleChange}
              id="title"
              required
            />
          </label>
          <label htmlFor="category">
            Category :
            <select
              name="category"
              id="category"
              onChange={this.handleChange}
              value={category}
            >
              {categories.map(category => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  submitNewBook: newBook => {
    dispatch(createBook(newBook));
  },
});

BooksForm.propTypes = {
  submitNewBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
