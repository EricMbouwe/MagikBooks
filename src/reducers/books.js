import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const initialState = [
  { id: 1, title: 'naruto', category: 'Action' },
  { id: 2, title: 'one piece', category: 'Sci-Fi' },
  { id: 3, title: 'casa', category: 'Biography' },
  { id: 4, title: 'doctor', category: 'Horror' },
  { id: 5, title: 'league', category: 'History' },
];

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
