import { filter, map } from "rxjs/operators";
import { ofType } from "redux-observable";

// constants
export const INCREMENT = "INCREMENT";
export const INCREMENT_IF_ODD = "INCREMENT_IF_ODD";

// actions
export const increment = () => ({ type: INCREMENT });
export const incrementIfOdd = () => ({ type: INCREMENT_IF_ODD });

// epics
export const incrementIfOddEpic = (action$, state$) =>
  action$.pipe(
    ofType(INCREMENT_IF_ODD),
    filter(() => state$.value.counter % 2 === 1),
    map(() => increment())
  );

// reducers
export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    default:
      return state;
  }
};
