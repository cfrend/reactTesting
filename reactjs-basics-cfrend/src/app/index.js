import React from "react";
import { render } from "react-dom";

//importing in the child components
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
constructor(){
      super();
      this.state = {
            homeLink: "Home"
      };
}
//example function
onGreet(){
      alert("Hello!");
}

onChangeLinkName(newName){
      //trigger a rerendering of the UI
      this.setState({
            homeLink: newName
      });
}

  render() {
        return (
             <div className="container">
                  <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                              <Header homeLink={this.state.homeLink}/>
                        </div>
                  </div>
                  <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                              {/*JSX Comment syntax & calling the Home component and passing some prop values including a function as a prop greet*/}
                              <Home
                                    name={"Chauncey"}
                                    initialAge={32}
                                    greet={this.onGreet}
                                    changeLink={this.onChangeLinkName.bind(this)}
                                    initialLinkName={this.state.homeLink}
                              />
                        </div>
                  </div>
             </div>
       );
  }
}

render(<App/>,window.document.getElementById('app'));
