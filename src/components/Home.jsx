import React from "react";
import { Parallax } from "react-parallax";
import ReactDOM from "react-dom";
import axios from "axios";

import Search from "./Search.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ""
    };
    this.getImage = this.getImage.bind(this);
  }

  componentDidMount() {
    this.getImage();
  }

  getImage() {
    axios.get("/image")
      .then(res => {
        this.setState({
          img: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="hide-on-small-only">
          <Parallax bgImage={this.state.img} strength={500}>
            <Search history={this.props.history} />
            <div style={{ height: "150px" }} />
          </Parallax>
        </div>
        <div className="blue-grey lighten-5 hide-on-med-and-up">
          <main className="container search-bar">
            <h3 className="teal-text text-lighten-2 search-bar-text">
              Poopers
            </h3>
            <div className="section">TO DO: Search Form Component</div>
          </main>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center teal-text text-lighten-2">
                    <i className="material-icons medium">restaurant_menu</i>
                  </h2>
                  <h5 className="center">24,000 restaurants</h5>
                  <p className="light">
                    New York City has about 24,000 restaurants. City health
                    inspectors check them for compliance with food-safety
                    regulations at least once a year. Find out if your favorite
                    restaurant passes muster or not!
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center teal-text text-lighten-2">
                    <i className="material-icons medium">local_cafe</i>
                  </h2>
                  <h5 className="center">Health violations</h5>
                  <p className="light">
                    Inspectors look for violations such as failure to keep food
                    at a safe temperature; presence of flies and vermin; and
                    improperly sanitized cooking utensils. They can close
                    restaurants that have serious and persistent violations.
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center teal-text text-lighten-2">
                    <i className="material-icons medium">report_problem</i>
                  </h2>
                  <h5 className="center">Report a problem</h5>
                  {/* TO DO: link to report-violations use React Routes */}
                  <p className="light">
                    You can file complaints online about problems with food
                    safety or food poisoning at restaurants in New York City.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Home;
