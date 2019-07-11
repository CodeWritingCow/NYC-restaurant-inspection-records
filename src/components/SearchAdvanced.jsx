import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import CuisineMenu from './CuisineMenu.jsx';

class SearchAdvanced extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            borough: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
            cuisines: [
                {
                    type: "Fast Foods",
                    list: ["Chicken", "Donuts", "Hamburgers", "Pizza", "Pizza/Italian", "Sandwiches", "Sandwiches/Salads/Mixed Buffet"]
                },
                {
                    type: "American",
                    list: ["American", "Caribbean", "Seafood", "Steak", "Soul Food"]
                },
                {
                    type: "Asian",
                    list: ["Asian", "Chinese", "Chinese/Japanese", "Japanese", "Korean", "Filipino", "Indian", "Thai", "Vietnamese/Cambodian/Malaysia", "Armenian"]
                },
                {
                    type: "European",
                    list: ["Eastern European", "Greek", "German", "Italian", "Jewish/Kosher", "Mediterranean", "Polish", "Russian"]
                },
                {
                    type: "Health food",
                    list: ["Fruits/Vegetables", "Salads", "Vegetarian"]
                },
                {
                    type: "Latin American",
                    list: ["Mexican", "Tex-Mex", "Latin (Cuban, Dominican, Puerto Rican, South & Central American)", "Peruvian", "Spanish"]
                },
                {
                    type: "African",
                    list: ["African", "Ethiopian"]
                },
                {
                    type: "Bakeries, Cafes and Deli",
                    list: ["Bagels/Pretzels", "Bakery", "CafÃ©/Coffee/Tea", "Delicatessen", "Ice Cream, Gelato, Yogurt, Ices", "Pancakes/Waffles"]
                },
                {
                    type: "Other",
                    list: ["Other"]
                }
            ]
        }

        this.dbaInput = React.createRef();
        this.zipInput = React.createRef();
        this.boroInput = React.createRef();
        this.cuisineInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const that = this;

        let data = {
            "dba": this.dbaInput.current.value,
            "zipcode": this.zipInput.current.value,
            "boro": this.boroInput.current.value,
            "cuisine_description": this.cuisineInput.current.value
        }

        // if user doesn't pick cuisine from dropdown menu
        // remove cuisine_description from query
        // this prevents server from throwing an error
        if (data.cuisine_description === "") {
            delete data.cuisine_description;
        }

        axios.post('/search', data)
            .then(res => {
                that.props.history.push('/search-results', res.data);
            })
            .catch(err => {
                console.log("error: ");
                console.log(err);
            });
    }

    render() {
        return (
            <div className="blue-grey lighten-5">
                <main className="container" style={{'padding': '35px', 'marginBottom': '50px'}}>
                    <div className="section">
                        <h3 className="teal-text text-lighten-2" style={{'fontWeight': 'bold'}}>Advanced Search</h3>
                        <div className="row">
                            <form onSubmit={this.handleSubmit} className="col s12 card">
                                <h5 className="">Find a restaurant</h5>
                                <div className="row">
                                    <div className="input-field col s12 m8">
                                        <label htmlFor="dba">Restaurant Name</label>
                                        <input type="text" name="dba" ref={this.dbaInput} />
                                    </div>
                                    <div className="input-field col s12 m4">
                                        <select id="select-override" name="boro" ref={this.boroInput}>
                                            {this.state.borough.map((boro, i) => (
                                                <option key={i} value={boro.toUpperCase()}>{boro}</option>
                                            ))}
                                        </select>
                                        {/* <label>Borough</label> */}
                                    </div>		
                                </div>

                                <div className="row">
                                <div className="input-field col s12 m8">
                                        <select name="cuisine_description" id="select-override" ref={this.cuisineInput}>
                                            <option value="" disabled selected>None</option>
                                            <CuisineMenu cuisines={this.state.cuisines} />
                                        </select>
                                        {/* <label>Cuisine Type</label> */}
                                    </div>
                                    <div className="input-field col s12 m4">
                                        <label htmlFor="zipcode">ZIP Code</label>
                                        <input type="text" name="zipcode" ref={this.zipInput} pattern="[0-9]{5}" title="ZIP code must be a five-digit number" />
                                    </div>		
                                </div>

                                <div className="row center">
                                    <button className="btn-large waves-effect waves-light center-align" type="submit">Search
                                        <i className="material-icons right">search</i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        )
    }    
}

export default SearchAdvanced;