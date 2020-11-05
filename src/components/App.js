import React from 'react';
import './App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="Bookstore-CMS">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
