import {render} from "react-dom";
import React from "react";
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import {Provider} from "react-redux";

import App from "./containers/App";
import store from "./store";

render(
      <Provider store={store}>
            <App />
      </Provider> ,
      window.document.getElementById('app'));
