import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dbaInput = React.createRef();
    this.boroInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const that = this;

    let data = {
      "dba": this.dbaInput.current.value,
      "zipcode": "",
      "boro": this.boroInput.current.value
    };

    axios.post('/search', data)
      .then(res => {
        that.props.history.push('/search-results', res.data);
      })
      .catch(err => {
        console.log("error: ");
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s4 homebox">
            <h4 className="teal-text text-lighten-2 hide-on-med-and-down homebox-font">
              IS YOUR FOOD SAFE
            </h4>
            <h5>Find a restaurant's inspection records</h5>
          </div>
        </div>
        <div className="row">
          <form onSubmit={this.handleSubmit} className="col s12 card searchbox">
            <div className="row">
              <div className="input-field col s6">
                <input
                  type="text"
                  name="dba"
                  className="validate"
                  placeholder="Restaurant name"
                  ref={this.dbaInput}
                />
              </div>
              <div className="input-field col s3">
                <select name="boro" ref={this.boroInput}>
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
