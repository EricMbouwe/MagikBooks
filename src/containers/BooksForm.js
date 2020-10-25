import React, { Component } from 'react';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const categories = [
      "Action",
      "Biography",
      "History",
      "Horror",
      "Kids",
      "Learning",
      "Sci-Fi",
    ];

    return (
      <div>
        <form>
          <label htmlFor="title">Title</label>
          <input type="text" onChange={this.handleChange} id='title'/>
          <select name="categories" id="categories">
            <option value="">Action</option>
            <option value="">Biography</option>
            <option value="">History</option>
            <option value="">Horror</option>
            <option value="">Kids</option>
            <option value="">Learning</option>
            <option value="">Sci-Fi</option>
          </select>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default BooksForm;
