import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class SearchAdvanced extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            borough: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"]
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
            <div className="container">

                <div className="row">
                    <form onSubmit={this.handleSubmit} className="col s12 card searchbox">
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
                                    <optgroup label="Fast Foods">
                                        <option value="Chicken">Chicken</option>
                                        <option value="Donuts">Donuts</option>
                                        <option value="Hamburgers">Hamburgers</option>					
                                        <option value="Pizza">Pizza</option>
                                        <option value="Pizza/Italian">Pizza/Italian</option>
                                        <option value="Sandwiches">Sandwiches</option>
                                        <option value="Sandwiches/Salads/Mixed Buffet">Sandwiches/Salads/Mixed Buffet</option>
                                    </optgroup>
                                    <optgroup label="American">
                                        <option value="American">American</option>
                                        <option value="Caribbean">Caribbean</option>
                                        <option value="Seafood">Seafood</option>
                                        <option value="Steak">Steak</option>
                                        <option value="Soul Food">Soul Food</option>					
                                    </optgroup>
                                    <optgroup label="Asian">
                                        <option value="Asian">Asian</option>
                                        <option value="Chinese">Chinese</option>
                                        <option value="Chinese/Japanese">Chinese/Japanese</option>
                                        <option value="Japanese">Japanese</option>
                                        <option value="Korean">Korean</option>
                                        <option value="Filipino">Filipino</option>										
                                        <option value="Indian">Indian</option>
                                        <option value="Thai">Thai</option>
                                        <option value="Vietnamese/Cambodian/Malaysia">Vietnamese/Cambodian/Malaysia</option>
                                    </optgroup>
                                    <optgroup label="European">
                                        <option value="Eastern European">Eastern European</option>
                                        <option value="Greek">Greek</option>
                                        <option value="German">German</option>
                                        <option value="Italian">Italian</option>
                                        <option value="Jewish/Kosher">Jewish/Kosher</option>
                                        <option value="Mediterranean">Mediterranean</option>				
                                        <option value="Polish">Polish</option>
                                        <option value="Russian">Russian</option>
                                    </optgroup>
                                    <optgroup label="Health food">
                                        <option value="Fruits/Vegetables">Fruits/Vegetables</option>
                                        <option value="Salads">Salads</option>
                                        <option value="Vegetarian">Vegetarian</option>
                                    </optgroup>
                                    <optgroup label="Latin American">
                                        <option value="Mexican">Mexican</option>
                                        <option value="Tex-Mex">Tex-Mex</option>
                                        <option value="Latin (Cuban, Dominican, Puerto Rican, South & Central American)">Latin (Cuban, Dominican, Puerto Rican, South & Central American)</option>
                                        <option value="Peruvian">Peruvian</option>
                                        <option value="Spanish">Spanish</option>
                                    </optgroup>
                                    <optgroup label="African">
                                        <option value="African">African</option>
                                        <option value="Ethiopian">Ethiopian</option>
                                    </optgroup>
                                    <optgroup label="Bakeries, Cafes and Deli">
                                        <option value="Bagels/Pretzels">Bagels/Pretzels</option>
                                        <option value="Bakery">Bakery</option>
                                        <option value="CafÃ©/Coffee/Tea">Cafe</option>
                                        <option value="Delicatessen">Delicatessen</option>
                                        <option value="Ice Cream, Gelato, Yogurt, Ices">Ice Cream, Gelato, Yogurt, Ices</option>
                                        <option value="Pancakes/Waffles">Pancakes/Waffles</option>
                                    </optgroup>
                                    <optgroup label="Other">
                                        <option value="Armenian">Armenian</option>
                                        <option value="Other">Other</option>
                                    </optgroup>
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
        )
    }    
}

export default SearchAdvanced;