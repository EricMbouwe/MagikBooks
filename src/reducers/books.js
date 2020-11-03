import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const initialState = {
  books: [
    // { id: Math.floor(Math.random() * 11), title: 'naruto', category: 'action' },
    // { id: Math.floor(Math.random() * 11), title: 'one piece', category: 'action' },
    // { id: Math.floor(Math.random() * 11), title: 'casa', category: 'biography' },
    // { id: Math.floor(Math.random() * 11), title: 'doctor', category: 'horor' },
    // { id: Math.floor(Math.random() * 11), title: 'league', category: 'history' },
    { id: 1, title: 'naruto', category: 'action' },
    { id: 2, title: 'one piece', category: 'action' },
    { id: 3, title: 'casa', category: 'biography' },
    { id: 4, title: 'doctor', category: 'horor' },
    { id: 5, title: 'league', category: 'history' },
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload.book];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default booksReducer;
