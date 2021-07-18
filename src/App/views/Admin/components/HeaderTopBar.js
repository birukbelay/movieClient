import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logoutUser} from "../../../../Store/Auth/auth.actions";

function SearchWrapper() {
  return <div className="search-wrapper">
    <div className="input-holder">
      <input
          type="text"
          className="search-input"
          placeholder="Type to search"
      />
      <button className="search-icon">
        <span/>
      </button>
    </div>
    <button className="close"/>
  </div>;
}

function NavButton({className, link, icon, name}) {
  return <li className={className}>
    <Link to={link} className="nav-link">
      <i className={icon}> </i>
      {name}
    </Link>
  </li>;
}

function HeaderTopBar() {

  const authenticated = useSelector(state => state.user.authenticated)
  const dispatch = useDispatch();

  return (
      <div className="app-header header-shadow">

        <div className="app-header__logo">
          {/*<div className="logo-src"/>*/}
          <div className="header__pane ml-auto">
              <NavButton name={"Home"} link={"/"} className={"nav-item"} icon={"nav-link-icon fa fa-home"}/>
              <button className="hamburger close-sidebar-btn hamburger--elastic">
                <span className="hamburger-box">
                  {/*<span className="nav-link-icon fa fa-home"/>*/}
                </span>
              </button>
            <div>

            </div>
          </div>
        </div>

        <div className="app-header__mobile-menu">
          <div>
            <button
                type="button"
                className="hamburger hamburger--elastic mobile-toggle-nav"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"/>
              </span>
            </button>
          </div>
        </div>

        <div className="app-header__content">
          <div className="app-header-left">
            <SearchWrapper/>
            <ul className="header-menu nav">
              <NavButton name={"Statics"} link={"#"} className={"nav-item"} icon={"nav-link-icon fa fa-database"}/>
              <NavButton name={"Projects"} link={"#"} className={"btn-group nav-item"}
                         icon={"nav-link-icon fa fa-edit"}/>
              <NavButton name={"Settings"} link={"#"} className={"dropdown nav-item"} icon={"nav-link-icon fa fa-cog"}/>


            </ul>
            {" "}
          </div>
          <div className="app-header-right">
            <ul className="header-menu nav">
              <li className="dropdown nav-item">
                <Link to={"#"} className="nav-link"
                >
                  <img
                      width={42}
                      className="rounded-circle"
                      src="http://localhost:8080/assets/images/movies/uuid/5f909ee43173e2a6b2adac43/pullups.jpg13cc4b32874db353.jpg"
                      alt={""}
                  />

                  <i className="nav-link-icon fa fa-sign-out"/>
                  {'profile'}
                </Link>
              </li>
              <li className="dropdown nav-item">
                <Link onClick={() => dispatch(logoutUser())} to={"/"} className="nav-link">
                  <img width={42} className="rounded-circle" alt={""}/>
                  {'Logout'}
                  <i className="metismenu-icon pe-7s-angle-right-circle"/>
                </Link>
              </li>

            </ul>

            {" "}
          </div>
        </div>
      </div>
  );

}

export default HeaderTopBar;
