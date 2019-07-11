import React from 'react';
import { Parallax } from "react-parallax";

const NotFound = () => {
    return (
        <div className="hide-on-small-only">
          <Parallax bgImage={"https://res.cloudinary.com/hg7jltnn9/image/upload/f_auto,q_auto/v1562031458/public/assets/img/kevin-curtis-3308-unsplash-1024x676_bcwbjg.jpg"} strength={500} style={{ 'height': "500px" }}>
            {/* <div style={{ 'height': "150px" }} /> */}

            <div className="container" style={{'backgroundColor': 'rgba(200,200,200,0.5)', 'padding': '30px'}}>
                <h3 className="center" style={{'fontWeight': 'bold'}}>Page Not Found</h3>
                <div className="row center">
                    <h5>It looks like you were looking for a page that does not exist.</h5>    			
                </div>
                <div className="row center">
                    <a href="/" className="btn-large waves-effect">GO HOME <i className="material-icons right">home</i></a>
                </div>
            </div>
          </Parallax>
        </div>
    )
}


export default NotFound;