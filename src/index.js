import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./reducers";
import rootEpic from "./epics";

const epicMiddleware = createEpicMiddleware();
function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);

  return store;
}

const Root = () => {
  return (
    <Provider store={configureStore()}>
      <div>hello</div>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
