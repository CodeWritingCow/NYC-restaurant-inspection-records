import React from "react";
import ReactDOM from "react-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userBorough: "MANHATTAN",
      restaurant: "",
      borough: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    // TO DO: send request for search
    // endpoint: /?dba=[restaurant name]&boro=[borough choice]
    console.log(this.state.restaurant);
    console.log(this.state.userBorough);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
                  name="restaurant"
                  // className="validate"
                  placeholder="Restaurant name"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="input-field col s3">
                <select
                  name="userBorough"
                  id="select-override"
                  value= {this.state.userBorough}
                  onChange={this.handleChange}
                >
                  {this.state.borough.map((boro, i) => (
                    <option key={i} value={boro.toUpperCase()}>{boro}</option>
                  ))}
                </select>
              </div>
              <div className="input-field col s3">
                <button
                  className="btn-large waves-effect waves-light"
                  onClick={this.handleSubmit}
                  type="button"
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
