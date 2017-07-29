import React from "react";
import {browserHistory} from "react-router";

export class User extends React.Component {
      onNavigateHome(){
            {/*browser history pushes a new URL on to the browser*/}
            browserHistory.push("/home");
      }
      render(){
            return(
                  <div>
                        <h3>The User Page</h3>
                        {/*this.props.params accesses the data that is passed into the props of this compoenent by react-router.  .id specifies which param*/}
                        <p>User ID: {this.props.params.id}</p>
                        <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home</button>
                  </div>
            );
      }
}
