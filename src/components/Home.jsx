import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "https://res.cloudinary.com/hg7jltnn9/image/upload/v1562031386/public/assets/img/blank-black-picture_wsxz8k.jpg"
    };
  }

  render() {
    return (
      <div>
        <div className="parallax-container hide-on-small-only valign-wrapper">
          <div className="parallax">
            <img
              id="parallaxImg"
              src={this.state.img}
              alt="Blank black picture is placeholder image"
            />
          </div>
        </div>
        <div className="blue-grey lighten-5 hide-on-med-and-up">
          <main className="container search-bar">
            <h3 className="teal-text text-lighten-2 search-bar-text">
              Poopers
            </h3>
            <div className="section">TO DO: Search Form Component</div>
          </main>
        </div>
      </div>
    );
  }
}

export default Home;
