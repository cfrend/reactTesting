//using an es6 convention below state = initialState where state will be assigned the first value in initialState if a new state is not dispatched.
const  mathReducer = (state = {
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

export default mathReducer;
