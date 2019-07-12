import React from "react";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

const Footer = props => {
  return (
    <footer className="page-footer teal lighten-2">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">About NYC Food Safety</h5>
            <p className="grey-text text-lighten-4">
              Our goal is to provide the public with an easy way to search New
              York City's restaurant inspection records. We are not affiliated
              with the city health department or other government agencies.
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
  );
};

export default Footer