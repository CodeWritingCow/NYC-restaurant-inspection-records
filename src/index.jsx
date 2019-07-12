import React, { Suspense, Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import SearchResults from "./components/SearchResults.jsx";
import Search from "./components/Search.jsx";
import SearchAdvanced from "./components/SearchAdvanced.jsx";
import Report from "./components/Report.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // TODO: Compartmentalize Header & Footer (Modularity)
  render() {
    return (
      <Router>
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/search-results" exact component={SearchResults} />
        <Route path="/search" exact component={SearchAdvanced} />
        <Route path="/report-violations" exact component={Report} />

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
