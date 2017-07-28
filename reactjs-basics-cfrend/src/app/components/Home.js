import React from "react";

export class Home extends React.Component {
//property of this class component featuring a state
      constructor(props){
            super();
            this.state = {
                        age: props.initialAge,
                        status: 0
            };
            //after 1 second status updates.  Just a proerty function that starts when component is rendered for the first time
            //this demonstrates how react does not re-render the entire DOM
            setTimeout(() => {
                        this.setState({
                              status: 1
                        });
            },3000);
      }
      onMakeOlder() {
            this.setState({
                  age: this.state.age + 3
            });
      }
//main rendering functionality for this component
      render() {
            return(
                        <div>
                              <p>In a new Component!</p>
                              <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                              <p>Status: {this.state.status}</p>
                              <hr/>
                              <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                              <hr/>
                              <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                        </div>
            );
      }
}
//propType example
Home.propTypes = {
            name: React.PropTypes.string,
            age: React.PropTypes.number,
            greet: React.PropTypes.func
};
