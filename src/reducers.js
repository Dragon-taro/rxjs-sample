import { combineReducers } from "redux";
import { INCREMENT, FETCH_USER_FULFILLED } from "./actions";

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    default:
      return state;
  }
};

const users = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_FULFILLED:
      return {
        ...state,
        // `login` is the username
        [action.payload.login]: action.payload
      };

    default:
      return state;
  }
};

export default combineReducers({
  counter,
  users
});
