import React from "react";
import Link from 'react-router-dom'

class MainContentGraphRow extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div className="mb-3 card">
            <div className="card-header-tab card-header-tab-animation card-header">
              <div className="card-header-title">
                <i className="header-icon lnr-apartment icon-gradient bg-love-kiss">
                  {" "}
                </i>
                Sales Report
              </div>
              <ul className="nav">
                <li className="nav-item">
                  <Link to="" className="active nav-link">Last</Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="javascript:void(0);"
                    className="nav-link second-tab-toggle"
                  >
                    Current
                  </Link>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tabs-eg-77">
                  <div className="card mb-3 widget-chart widget-chart2 text-left w-100">
                    <div className="widget-chat-wrapper-outer">
                      <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                        <canvas id="canvas" />
                      </div>
                    </div>
                  </div>
                  <h6 className="text-muted text-uppercase font-size-md opacity-5 font-weight-normal">
                    Top Authors
                  </h6>
                  <div className="scroll-area-sm">
                    <div className="scrollbar-container">
                      <ul className="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left mr-3">
                                <img
                                  width={42}
                                  className="rounded-circle"
                                  src="assets/images/avatars/9.jpg"
                                  alt
                                />
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Ella-Rose Henry
                                </div>
                                <div className="widget-subheading">
                                  Web Developer
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="font-size-xlg text-muted">
                                  <small className="opacity-5 pr-1">$</small>
                                  <span>129</span>
                                  <small className="text-danger pl-2">
                                    <i className="fa fa-angle-down" />
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left mr-3">
                                <img
                                  width={42}
                                  className="rounded-circle"
                                  src="assets/images/avatars/5.jpg"
                                  alt
                                />
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Ruben Tillman
                                </div>
                                <div className="widget-subheading">
                                  UI Designer
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="font-size-xlg text-muted">
                                  <small className="opacity-5 pr-1">$</small>
                                  <span>54</span>
                                  <small className="text-success pl-2">
                                    <i className="fa fa-angle-up" />
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left mr-3">
                                <img
                                  width={42}
                                  className="rounded-circle"
                                  src="assets/images/avatars/4.jpg"
                                  alt
                                />
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Vinnie Wagstaff
                                </div>
                                <div className="widget-subheading">
                                  Java Programmer
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="font-size-xlg text-muted">
                                  <small className="opacity-5 pr-1">$</small>
                                  <span>429</span>
                                  <small className="text-warning pl-2">
                                    <i className="fa fa-dot-circle" />
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left mr-3">
                                <img
                                  width={42}
                                  className="rounded-circle"
                                  src="assets/images/avatars/3.jpg"
                                  alt
                                />
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Ella-Rose Henry
                                </div>
                                <div className="widget-subheading">
                                  Web Developer
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="font-size-xlg text-muted">
                                  <small className="opacity-5 pr-1">$</small>
                                  <span>129</span>
                                  <small className="text-danger pl-2">
                                    <i className="fa fa-angle-down" />
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left mr-3">
                                <img
                                  width={42}
                                  className="rounded-circle"
                                  src="assets/images/avatars/2.jpg"
                                  alt
                                />
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Ruben Tillman
                                </div>
                                <div className="widget-subheading">
                                  UI Designer
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="font-size-xlg text-muted">
                                  <small className="opacity-5 pr-1">$</small>
                                  <span>54</span>
                                  <small className="text-success pl-2">
                                    <i className="fa fa-angle-up" />
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="mb-3 card">
            <div className="card-header-tab card-header">
              <div className="card-header-title">
                <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure">
                  {" "}
                </i>
                Bandwidth Reports
              </div>
              <div className="btn-actions-pane-right">
                <div className="nav">
                  <Link
                    to=""
                    className="border-0 btn-pill btn-wide btn-transition active btn btn-outline-alternate"
                  >
                    Tab 1
                  </Link>
                  <Link
                    to=""
                    className="ml-1 btn-pill btn-wide border-0 btn-transition  btn btn-outline-alternate second-tab-toggle-alt"
                  >
                    Tab 2
                  </Link>
                </div>
              </div>
            </div>
            <div className="tab-content">
              <div className="tab-pane fade active show" id="tab-eg-55">
                <div className="widget-chart p-3">
                  <div
                    style={{
                      height: "350px"
                    }}
                  >
                    <canvas id="line-chart" />
                  </div>
                  <div className="widget-chart-content text-center mt-5">
                    <div className="widget-description mt-0 text-warning">
                      <i className="fa fa-arrow-left" />
                      <span className="pl-1">175.5%</span>
                      <span className="text-muted opacity-8 pl-1">
                        increased server resources
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="widget-content">
                        <div className="widget-content-outer">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                              <div className="widget-numbers fsize-3 text-muted">
                                63%
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="text-muted opacity-6">
                                Generated Leads
                              </div>
                            </div>
                          </div>
                          <div className="widget-progress-wrapper mt-1">
                            <div className="progress-bar-sm progress-bar-animated-alt progress">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                aria-valuenow={63}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{
                                  width: "63%"
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="widget-content">
                        <div className="widget-content-outer">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                              <div className="widget-numbers fsize-3 text-muted">
                                32%
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="text-muted opacity-6">
                                Submitted Tickers
                              </div>
                            </div>
                          </div>
                          <div className="widget-progress-wrapper mt-1">
                            <div className="progress-bar-sm progress-bar-animated-alt progress">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                aria-valuenow={32}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{
                                  width: "32%"
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="widget-content">
                        <div className="widget-content-outer">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                              <div className="widget-numbers fsize-3 text-muted">
                                71%
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="text-muted opacity-6">
                                Server Allocation
                              </div>
                            </div>
                          </div>
                          <div className="widget-progress-wrapper mt-1">
                            <div className="progress-bar-sm progress-bar-animated-alt progress">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                aria-valuenow={71}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{
                                  width: "71%"
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="widget-content">
                        <div className="widget-content-outer">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                              <div className="widget-numbers fsize-3 text-muted">
                                41%
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="text-muted opacity-6">
                                Generated Leads
                              </div>
                            </div>
                          </div>
                          <div className="widget-progress-wrapper mt-1">
                            <div className="progress-bar-sm progress-bar-animated-alt progress">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                aria-valuenow={41}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{
                                  width: "41%"
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContentGraphRow;
