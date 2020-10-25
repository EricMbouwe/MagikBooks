import React, { Component } from 'react';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
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

    return (
      <div>
        <form>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={this.handleChange}
            id="title"
          />
          <select name="categories" id="categories">
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

export default BooksForm;
