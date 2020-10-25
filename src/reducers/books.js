import { CREATE_BOOK, REMOVE_BOOK } from "../actions";

const initialState = {
  books: [
    { id: 0, title: "naruto", category: "action" },
    { id: 1, title: "onepiece", category: "action" },
    { id: 2, title: "casa", category: "biography" },
    { id: 3, title: "doctor", category: "horor" },
    { id: 4, title: "league", category: "history" },
  ],
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload.book]
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload.id)
    default:
      return state;
  }
};
