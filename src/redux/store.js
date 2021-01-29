import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

//const middleware = [thunk];

//console.log(middleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
