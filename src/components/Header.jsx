import React from "react";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

const Header = props => {
  return (
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
  );
};

export default Header;
