import { ajax } from "rxjs/ajax";
import {
  INCREMENT_IF_ODD,
  FETCH_USER,
  increment,
  fetchUserFulfilled
} from "./actions";

const incrementIfOddEpic = (action$, state$) =>
  action$.pipe(
    ofType(INCREMENT_IF_ODD),
    filter(() => state$.value.counter % 2 === 1),
    map(() => increment())
  );

const fetchUserEpic = action$ =>
  action$.pipe(
    ofType(FETCH_USER),
    mergeMap(action =>
      ajax
        .getJSON(`https://api.github.com/users/${action.payload}`)
        .pipe(map(response => fetchUserFulfilled(response)))
    )
  );

export const rootEpic = combineEpics(incrementIfOddEpic, fetchUserEpic);
