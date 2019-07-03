import React, { Suspense, Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/Home.jsx";
// import About from "./components/About.jsx";
// import Comics from "./components/Comics.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <header>
          <nav className="teal">
            <div className="nav-wrapper container">
              <ul>
                <li>
                  <Link className="brand-logo truncate" to="/">
                    NYC Food Safety
                  </Link>
                  <Link
                    // TO DO: reusable side-bar nav component
                    to="#"
                    data-target="mobile-demo"
                    className="sidenav-trigger"
                  >
                    <i className="material-icons">menu</i>
                  </Link>
                </li>
              </ul>
              <ul className="right hide-on-med-and-down">
                <li className="li-home">
                  <Link to="/">Home</Link>
                </li>
                <li className="li-search">
                  <Link to="/search">Search</Link>
                </li>
                <li className="li-violation">
                  <Link to="/report-violations">Report Violations</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <Route path="/" exact component={Home} />
        {/* <Route path="/about/" component={About} />
          <Route path="/comics/" component={Comics} /> */}
        {/* FOOTER START */}
        <footer className="page-footer teal lighten-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About NYC Food Safety</h5>
                <p className="grey-text text-lighten-4">
                  Our goal is to provide the public with an easy way to search
                  New York City's restaurant inspection records. We are not
                  affiliated with the city health department or other government
                  agencies.
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li>
                    <Link to="/" className="grey-text text-lighten-3">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/search" className="grey-text text-lighten-3">
                      Search
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/report-violations"
                      className="grey-text text-lighten-3"
                    >
                      Report Violations
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <Link to="/" className="brown-text text-lighten-4">
                nycfoodsafety.org
              </Link>
            </div>
          </div>
        </footer>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("NYC-food-safety"));
