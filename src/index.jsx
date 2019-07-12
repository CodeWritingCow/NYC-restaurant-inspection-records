import React, { Suspense, Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import SearchResults from "./components/SearchResults.jsx";
import Search from "./components/Search.jsx";
import SearchAdvanced from "./components/SearchAdvanced.jsx";
import Report from "./components/Report.jsx";
import NotFound from "./components/404.jsx";

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
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search-results" exact component={SearchResults} />
          <Route path="/search" exact component={SearchAdvanced} />
          <Route path="/report-violations" exact component={Report} />
          <Route path="*" component={NotFound} />
        </Switch>

        <Footer/>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("NYC-food-safety"));
