import React from "react";

import BestSellersSlider from "../container/Latest";

class BestSellers extends React.Component {
  render() {
    return (
      <div className="best_sellers">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>Latest Movies</h2>
              </div>
            </div>
          </div>
          <BestSellersSlider/>
        </div>
      </div>
    );
  }
}

export default BestSellers;
