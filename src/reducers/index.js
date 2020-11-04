import booksReducer from '../reducers/books';
import filterReducer from '../reducers/filter'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
});

export default rootReducer