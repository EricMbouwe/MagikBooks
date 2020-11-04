import { CHANGE_FILTER } from "../actions";

export const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return 
    default:
      return state
  }
}