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

import {createStore} from "redux";

const reducer = (state, action) => {
      switch (action.type){
            case "ADD":
                  state = state + action.payload;
                  break;
            case "SUBTRACT":
                  state = state - action.payload;
                  break;
      }
      return state;
};
//the reducer will return the appropriate state, 1 is there as the initial state
const store = createStore(reducer , 1);

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
