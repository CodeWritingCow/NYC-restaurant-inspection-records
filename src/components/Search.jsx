import React from "react";
import ReactDOM from "react-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s4 homebox">
            <h4 className="teal-text text-lighten-2 hide-on-med-and-down homebox-font">
              IS YOUR FOOD SAFE?
            </h4>
            <h5>Find a restaurant's inspection records</h5>
          </div>
        </div>
        <div className="row">
          <form className="col s12 card searchbox">
            <div className="row">
              <div className="input-field col s6">
                <input
                  type="text"
                  name="dba"
                  className="validate"
                  placeholder="Restaurant name"
                />
              </div>
              <div className="input-field col s3">
                <select name="boro">
                  <option value="MANHATTAN">MANHATTAN</option>
                </select>
              </div>
              <div className="input-field col s3">
                <button
                  className="btn-large waves-effect waves-light"
                  type="submit"
                >
                  SEARCH
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
