import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { fetchUserEpic, users } from "./User";
import { incrementIfOddEpic, counter } from "./Counter";

export const rootEpic = combineEpics(incrementIfOddEpic, fetchUserEpic);
export const rootReducer = combineReducers({
  counter,
  users
});
