export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: {
    book: { ...book, id: Math.random() },
  },
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: {
    id: book.id,
  },
});

export const changeFilterAction = value => ({
  type: CHANGE_FILTER,
  payload: {
    value,
  },
});
