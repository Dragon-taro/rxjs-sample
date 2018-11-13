export const INCREMENT = "INCREMENT";
export const INCREMENT_IF_ODD = "INCREMENT_IF_ODD";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_FULFILLED = "FETCH_USER_FULFILLED";

export const increment = () => ({ type: INCREMENT });
export const incrementIfOdd = () => ({ type: INCREMENT_IF_ODD });
export const fetchUser = username => ({ type: FETCH_USER, payload: username });
export const fetchUserFulfilled = payload => ({
  type: FETCH_USER_FULFILLED,
  payload
});
