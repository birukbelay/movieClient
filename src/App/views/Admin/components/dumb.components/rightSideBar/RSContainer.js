import React from "react";
import RSh from "./RSh";
import RSCheckBox from "./RSCheckBox";
import RSColor from "./RSColor";

class RSContainer extends React.Component {
  render() {
    return (
      <div className="scrollbar-container">
        <div className="theme-settings__options-wrapper">
          <h3 className="themeoptions-heading">Layout Options</h3>
          <div className="p-3">
            <ul className="list-group">
              <li className="list-group-item">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left mr-3">
                      <div
                        className="switch has-switch switch-container-class"
                        data-class="fixed-header"
                      >
                        <div className="switch-animate switch-on">
                          <input
                            type="checkbox"
                            defaultChecked
                            data-toggle="toggle"
                            data-onstyle="success"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left">
                      <div className="widget-heading">Fixed Header</div>
                      <div className="widget-subheading">
                        Makes the header top fixed, always visible!
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left mr-3">
                      <div
                        className="switch has-switch switch-container-class"
                        data-class="fixed-sidebar"
                      >
                        <div className="switch-animate switch-on">
                          <input
                            type="checkbox"
                            defaultChecked
                            data-toggle="toggle"
                            data-onstyle="success"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left">
                      <div className="widget-heading">Fixed Sidebar</div>
                      <div className="widget-subheading">
                        Makes the sidebar left fixed, always visible!
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left mr-3">
                      <div
                        className="switch has-switch switch-container-class"
                        data-class="fixed-footer"
                      >
                        <div className="switch-animate switch-off">
                          <input
                            type="checkbox"
                            data-toggle="toggle"
                            data-onstyle="success"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left">
                      <div className="widget-heading">Fixed Footer</div>
                      <div className="widget-subheading">
                        Makes the app footer bottom fixed, always visible!
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <RSh></RSh>
          <RSCheckBox></RSCheckBox>
          <RSh></RSh>
          <RSColor></RSColor>
          <RSh></RSh>
          <RSColor></RSColor>
        </div>
      </div>
    );
  }
}

export default RSContainer;
