import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";

class App extends React.Component{
      render(){
            return(
                  <Router history={browserHistory}>
                        <Route path={"/"} component={Root}>
                              {/*IndexRoute aggrages various URLs like domain.io/ or domain.io/home to the same home component URL*/}
                              <IndexRoute component={Home}  />
                              {/*The Root component persists as the /child components are rendered below*/}
                              <Route path={"user"} component={User} />
                              <Route path={"home"} component={Home} />
                        </Route>
                        {/*A component that is not a child of root.*/}
                        <Route path={"home-single"} component={Home} />
                  </Router>
            );
      }
}
render(<App />, window.document.getElementById('app'));
