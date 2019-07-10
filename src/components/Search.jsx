import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      borough: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"]
    };
    
    this.dbaInput = React.createRef();
    this.boroInput = React.createRef();
       
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(e) {
    e.preventDefault();
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
                  name="restaurant"
                  placeholder="Restaurant name"
                  ref={this.dbaInput}        
                  required
                />
              </div>
              <div className="input-field col s3">
                <select
                  name="boro"
                  ref={this.boroInput}
                  id="select-override"
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
