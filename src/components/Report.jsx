import React from "react";
import { Parallax } from "react-parallax";

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "https://res.cloudinary.com/hg7jltnn9/image/upload/f_auto,q_auto/v1562031427/public/assets/img/pan-with-olive-oil-ready-to-cooking-picjumbo-com_1024_x683_r6v9jd.jpg"
    };
  }

  render() {
    return (
      <div>
        <div className="hide-on-small-only">
          <Parallax bgImage={this.state.img} strength={500}>
            <div style={{ height: "500px" }} />
          </Parallax>
        </div>

        <div className="container">
        <div className="section">
        <h3 className="center violation-title">Report Violations</h3>
            <div className="row">
                <div className="col s12 m4">
                    <div className="icon-block">
                        <h2 className="center teal-text text-lighten-2">
                            <i className="material-icons medium">local_hospital</i>
                        </h2>
                        <h5 className="center">Restaurants</h5>
    
                        <p className="light">You can report unsanitary conditions at restaurants in New York City through <a href="https://www1.nyc.gov/apps/311universalintake/form.htm?serviceName=DOHMH+Food+Establishment" target="_blank">nyc.gov.</a> For more information, visit <a href="http://www1.nyc.gov/nyc-resources/service/1723/food-safety-or-poisoning-complaint" target="_blank">"Food Safety or Poisoning Complaint."</a></p>
                    </div>
                </div>
    
                <div className="col s12 m4">
                    <div className="icon-block">
                        <h2 className="center teal-text text-lighten-2">
                            <i className="material-icons medium">report_problem</i>
                        </h2>
                        <h5 className="center">Food Carts</h5>
    
                        <p className="light">To report unsanitary or unlicensed food carts, use <a href="https://www1.nyc.gov/apps/311universalintake/form.htm?serviceName=DOHMH+Mobile+Food+Vendor">this form</a></p>
                    </div>
                </div>
    
                <div className="col s12 m4">
                    <div className="icon-block">
                        <h2 className="center teal-text text-lighten-2">
                            <i className="material-icons medium">mood_bad</i>
                        </h2>
                        <h5 className="center">Food Poisoning</h5>
    
                        <p className="light">
                            Report food poisoning involving <a href="https://www1.nyc.gov/apps/311universalintake/form.htm?serviceName=DOHMH+Food+Poisoning+1+or+2"></a>, or <a href="https://www1.nyc.gov/apps/311universalintake/form.htm?serviceName=DOHMH+Food+Poisoning+3+or+More">three or more people.</a>
                        </p>
                    </div>
                </div>
            </div>
    
        </div>
      </div>
      </div>
    );
  }
}

export default Report;
