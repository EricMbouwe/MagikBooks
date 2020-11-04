import { CHANGE_FILTER } from "../actions";

const filter = 'All'

export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      state = action.payload.value
      return state
    default:
      return state
  }
}