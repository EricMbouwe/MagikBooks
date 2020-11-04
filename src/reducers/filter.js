import { CHANGE_FILTER } from "../actions";

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      state = action.payload.value
      return state
    default:
      return state
  }
}

export default filterReducer