
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

//the reducer will return the appropriate state
export default createStore(
    combineReducers({
          math,
          user
    }),
    {},
    applyMiddleware(logger())
);
