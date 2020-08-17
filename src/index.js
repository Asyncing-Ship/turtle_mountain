// ----- Start of imports -----
// React Import:
import React from "react";
// React DOM Imports:
import ReactDOM from "react-dom";
// Redux Imports:
import { createStore, applyMiddleware } from "redux";
// React Redux Imports:
import { Provider } from "react-redux";
// Redux Saga Imports:
import createSagaMiddleware from "redux-saga";
// Redux Devtools Extension Imports:
import { composeWithDevTools } from "redux-devtools-extension";
// Redux Logger Import:
import logger from "redux-logger";
// Redux Reducers and Sagas Imports:
import rootReducer from "./Redux/Reducers"; // imports ./redux/reducers/index.js
import rootSaga from "./Redux/Sagas"; // imports ./redux/sagas/index.js
// Components Imports:
import App from "./Components/App/App";
// CSS Import:
import "./index.css";
// ----- End of imports -----

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
const middlewareList =
  process.env.NODE_ENV === "development"
    ? [sagaMiddleware, logger]
    : [sagaMiddleware];

const store = createStore(
  // tells the saga middleware to use the rootReducer
  // rootSaga contains all of our other reducers
  rootReducer,
  // adds all middleware to our project including saga and logger
  composeWithDevTools(applyMiddleware(...middlewareList))
);

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);

// This will render the whole app on build
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
