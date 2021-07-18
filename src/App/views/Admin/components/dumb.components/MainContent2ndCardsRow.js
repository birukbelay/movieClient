import React from "react";

class MainContent2ndCardsRow extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-xl-4">
          <div className="card mb-3 widget-content">
            <div className="widget-content-outer">
              <div className="widget-content-wrapper">
                <div className="widget-content-left">
                  <div className="widget-heading">Total Orders</div>
                  <div className="widget-subheading">Last year expenses</div>
                </div>
                <div className="widget-content-right">
                  <div className="widget-numbers text-success">1896</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <div className="card mb-3 widget-content">
            <div className="widget-content-outer">
              <div className="widget-content-wrapper">
                <div className="widget-content-left">
                  <div className="widget-heading">Products Sold</div>
                  <div className="widget-subheading">Revenue streams</div>
                </div>
                <div className="widget-content-right">
                  <div className="widget-numbers text-warning">$3M</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <div className="card mb-3 widget-content">
            <div className="widget-content-outer">
              <div className="widget-content-wrapper">
                <div className="widget-content-left">
                  <div className="widget-heading">Followers</div>
                  <div className="widget-subheading">People Interested</div>
                </div>
                <div className="widget-content-right">
                  <div className="widget-numbers text-danger">45,9%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
          <div className="card mb-3 widget-content">
            <div className="widget-content-outer">
              <div className="widget-content-wrapper">
                <div className="widget-content-left">
                  <div className="widget-heading">Income</div>
                  <div className="widget-subheading">Expected totals</div>
                </div>
                <div className="widget-content-right">
                  <div className="widget-numbers text-focus">$147</div>
                </div>
              </div>
              <div className="widget-progress-wrapper">
                <div className="progress-bar-sm progress-bar-animated-alt progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-valuenow={54}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{
                      width: "54%"
                    }}
                  />
                </div>
                <div className="progress-sub-label">
                  <div className="sub-label-left">Expenses</div>
                  <div className="sub-label-right">100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent2ndCardsRow;
