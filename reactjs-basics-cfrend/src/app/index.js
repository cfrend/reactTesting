// import React from "react";
// import {render} from "react-dom";
//
// import { User } from './components/User';
// import { Main } from './components/Main';
//
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Chauncey"
//         };
//     }
//
//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }
//
//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)}/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }
//
// render(<App />, window.document.getElementById('app'));

import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

//using an es6 convention below state = initialState where state will be assigned the first value in initialState if a new state is not dispatched.
const mathReducer = (state = {
      result: 1,
      lastValues: []
}, action) => {
      switch (action.type){
            case "ADD":
                  //create a new js object to get away from using an immutible object
                  state = {
                        //es6 quick and easy convention "spread operator" ...  to copy the input state structure
                        ...state,
                        result: state.result + action.payload,
                        lastValues: [...state.lastValues, action.payload]
                  };
                  break;
            case "SUBTRACT":
                  //create a new js object to get away from using an immutible object
                  state = {
                        //es6 quick and easy convention "spread operator" ...  to copy the input state structure
                        ...state,
                        result: state.result - action.payload,
                        lastValues: [...state.lastValues, action.payload]
                  };
                  break;
      }
      return state;
};

const userReducer = (state = {
      name: "Chauncey",
      age: 32
}, action) => {
      switch (action.type){
            case "SET_NAME":
                  //create a new js object to get away from using an immutible object
                  state = {
                        //es6 quick and easy convention "spread operator" ...  to copy the input state structure
                        ...state,
                        name: action.payload
                  };
                  break;
            case "SET_AGE":
                  //create a new js object to get away from using an immutible object
                  state = {
                        //es6 quick and easy convention "spread operator" ...  to copy the input state structure
                        ...state,
                        age: action.payload
                  };
                  break;
      }
      return state;
};

//Middleware custom initialization
const myLogger = (state) => (next) => (action) => {
    // console.log("Logged Action: ", action);
    next(action);
};

//the reducer will return the appropriate state
const store = createStore(
    combineReducers({mathReducer, userReducer}),
    {},
    applyMiddleware(myLogger, logger())
);

store.subscribe(() => {
    console.log("Store updated!", store.getState());
});

//by telling the store "Hey, here is a new dispatch action, the store will automatically pass this action to the reducer it has assigned to get the correct state"
store.dispatch({
      type: "ADD",
      payload: 100
});

store.dispatch({
      type: "ADD",
      payload: 22
});

store.dispatch({
      type: "SUBTRACT",
      payload: 5
});

store.dispatch({
      type: "SET_AGE",
      payload: 30
});
