import React from "react";
import {Link} from "react-router-dom";

import {LocalImg} from "Constants/constants";
class Banner extends React.Component {
  render() {
    return (
      <div
        className="main_slider"
        style={{
          backgroundImage: `url(${LocalImg("posters.jpeg")})`
        }}
      >
        <div className="container fill_height">
          <div className="row align-items-center fill_height">
            <div className="col">
              <div className="main_slider_content">
                <h6>new movies</h6>
                <h1>best movies</h1>
                <div className="red_button shop_now_button">
                  < Link to="#">view</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
