import React from "react";
import {Link} from "react-router";

//stateless constant component header example
export const Header = (props) => {
                  return(
                        <nav className="navbar navbar-default">
                              <div className="container">
                                    <div className="navbar-header">
                                          <ul className="nav navbar-nav">
                                                <li><Link to={"/home"} activeStyle={{color: "Red"}}>CYUTIL</Link></li>
                                                <li><Link to={"/user/"+(10)} activeStyle={{color: "Red"}} activeClassName={"active"}>Company</Link></li>
                                                <li><Link to={"/home-single"}>cy.PIPES™</Link></li>
                                                <li><a href="">For Developers</a></li>
                                                <li><a href="">{props.homeLink}</a></li>
                                                <li><form className="form-inline my-2 my-lg-0">
                                                      <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
                                                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                                </form>
                                                </li>
                                          </ul>

                                    </div>
                              </div>
                        </nav>
                  );
            };
