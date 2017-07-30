const userReducer = (state = {
      name: "Chauncey",
      age: 32
}, action) => {
      switch (action.type){
            case "SET_NAME_FULFILLED":
                  //create a new js object to get away from using an immutible object
                  state = {
                        //es6 quick and easy convention "spread operator" ...  to copy the input state structure
                        ...state,
                        name: action.payload
                  };
                  break;
            case "SET_AGE_FULFILLED":
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

export default userReducer;
