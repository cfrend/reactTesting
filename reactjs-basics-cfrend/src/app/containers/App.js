import React from "react";
import {connect} from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
import {addNumber, subtractNumber} from "../actions/mathActions";
import { setName, setAge } from "../actions/userActions";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Rachel")}/>
                {/*below we are passing a prop from this react component to the user payload in the redux hook up function below named mapStateToProps */}
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
      return{
            user: state.user,
            math: state.math
      };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};

//connect this reactJS compomonent with redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);
