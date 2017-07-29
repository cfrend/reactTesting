import React from "react";
//stateless constant component header example
export const Header = (props) => {
                  return(
                        <nav className="navbar navbar-default">
                              <div className="container">
                                    <div className="navbar-header">
                                          <ul className="nav navbar-nav">
                                                <li><a href="">CYUTIL</a></li>
                                                <li><a href="">Company</a></li>
                                                <li><a href="">cy.PIPES™</a></li>
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
