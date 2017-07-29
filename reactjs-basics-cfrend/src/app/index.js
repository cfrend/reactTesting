import React from "react";
import { render } from "react-dom";

//importing in the child components
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
constructor(){
      super();
      this.state = {
            homeLink: "Admin Change",
            homeMounted: true
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

onChangeHomeMounted(){
      this.setState({
                  homeMounted: !this.state.homeMounted
      });
}

  render() {
        let homeCmp = "";
        if (this.state.homeMounted){
             //JSX Comment syntax & calling the Home component and passing some prop values including a function as a prop greet
             homeCmp = (
                  <Home
                   name={"Chauncey"}
                   initialAge={32}
                   greet={this.onGreet}
                   changeLink={this.onChangeLinkName.bind(this)}
                   initialLinkName={this.state.homeLink}
                   />
             );
       }
        return (
             <div className="container">
                  <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                              <Header homeLink={this.state.homeLink}/>
                        </div>
                  </div>
                  <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                              {homeCmp}
                        </div>
                  </div>
                  <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                              <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
                        </div>
                  </div>
             </div>
       );
  }
}

render(<App/>,window.document.getElementById('app'));
