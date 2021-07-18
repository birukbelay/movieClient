import React from "react";
import {Link} from "react-router-dom";
class MainContentFooter extends React.Component {
  render() {
    return (
      <div className="app-wrapper-footer">
        <div className="app-footer">
          <div className="app-footer__inner">
            <div className="app-footer-left">
              <ul className="nav">
                <li className="nav-item">
                  <Link to={""} className="nav-link">
                    Footer Link 1
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={""} className="nav-link">
                    Footer Link 2
                  </Link>
                </li>
              </ul>
            </div>
            <div className="app-footer-right">
              <ul className="nav">
                <li className="nav-item">
                  <Link to={""} className="nav-link">
                    Footer Link 3
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={""} className="nav-link">
                    <div className="badge badge-success mr-1 ml-0">
                      <small>NEW</small>
                    </div>
                    Footer Link 4
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContentFooter;
