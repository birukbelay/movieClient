import React, {useState} from "react";

import {Link, useRouteMatch} from "react-router-dom";
import * as PropTypes from "prop-types";


function Title({name, display, onClick}) {
    const a = display === true ? " pe-7s-angle-down-circle" : " pe-7s-angle-right-circle"
    return <li onClick={onClick} className="app-sidebar__heading">{name}
        <i className={"metismenu-state-icon" + a}/>
    </li>;
}

function Page({id, active, onClick, path, name, icon}) {
    let activ = false;
    if (active===id && id !==undefined){
        console.log("id", id, active)
        activ=true
    }
    return <li >
        <Link onClick={()=>onClick()}   to={path} className={activ?"mm-active":""}>

            <i className={icon}/>
            {name}
        </Link>

    </li>;
}

Page.propTypes = {match: PropTypes.any};
const LeftSideBarInner = () => {
    let match = useRouteMatch();
    let path =match.path

    const [active, setActive] = useState("dash");
    const [displayItems, setItemsDisplay] = useState("items");
    const [displayGroups, setGroupsDisplay] = useState(false);
    const [displayGenres, setGenresDisplay] = useState(false);
    const [displayCategories, setCategoriesDisplay] = useState(false);

    return (
        <div className="scrollbar-sidebar">
            <div className="app-sidebar__inner">
                <ul className="vertical-nav-menu">

                    <li>
                        {/*<i className="metismenu-icon pe-7s-drawer"/>*/}
                    </li>

                    <Title name={"Pages"} display={true}/>
                    <Page id={"home"} active={active} onClick={()=>setActive("home")}  path={`/`} name={"Home page"} icon={"metismenu-icon pe-7s-home"} className={"mm-active"}/>
                    <Page id={"dash"} active={active} onClick={()=>setActive("dash")} path={`${match.path}/`} name={"Dashboard"} icon={"metismenu-icon pe-7s-drawer"}
                         />
                    {/*Items*/}
                    <Title  name={"items"} display={displayItems} onClick={() => setItemsDisplay("items")}/>
                    {displayItems==="items" &&
                    <>
                        <Page id={"/item/list"} active={active} onClick={()=>setActive("/item/list")} path={`${match.path}/item/list`} name={"List movies"} icon={"metismenu-icon pe-7s-hourglass"}/>
                        <Page id={"/item/add"} active={active} onClick={()=>setActive("/item/add")} path={`${match.path}/item/add`} name={"Create Movies"} icon={"metismenu-icon pe-7s-wallet"}/>
                    </>}
                    {/*Categories*/}
                    <Title name={"Genres"} display={displayItems} onClick={() => setItemsDisplay("genres")}/>
                    {displayItems==="genres"  &&
                    <>
                        <Page id={"/genres/list"} active={active} onClick={()=>setActive("/genres/list")} path={`${match.path}/genres/list`} name={"List  Genres"} icon={"metismenu-icon pe-7s-hourglass"}/>
                        <Page id={"/genres/add"} active={active} onClick={()=>setActive("/genres/add")} path={`${match.path}/genres/add`} name={"Create Genres"} icon={"metismenu-icon pe-7s-wallet"}/>
                    </>}
                    {/*Groups*/}
                    <Title name={"Groups"} display={displayItems} onClick={() => setItemsDisplay("groups")}/>
                    {displayItems==="groups"  &&
                    <>
                        <Page id={"/group/list"} active={active} onClick={()=>setActive("/group/list")} path={`${match.path}/group/list`} name={"List Groups"} icon={"metismenu-icon pe-7s-hourglass"}/>
                        <Page id={"/group/add"} active={active} onClick={()=>setActive("/group/add")} path={`${match.path}/group/add`} name={"Create Groups"} icon={"metismenu-icon pe-7s-wallet"}/>
                    </>}
                    {/*Categories*/}
                    <Title name={"Categories"} display={displayItems} onClick={() => setItemsDisplay("category")}/>
                    {displayItems==="category"  &&
                    <>
                        <Page id={"/category/list"} active={active} onClick={()=>setActive("/category/list")} path={`${match.path}/category/list`} name={"List Categories"} icon={"metismenu-icon pe-7s-hourglass"}/>
                        <Page id={"/category/add"} active={active} onClick={()=>setActive("/category/add")} path={`${match.path}/category/add`} name={"Create Categories"} icon={"metismenu-icon pe-7s-wallet"}/>
                    </>}

                </ul>
            </div>
        </div>
    );

}


class LeftSideBar extends React.Component {
    render() {
        return (
            <div className="app-sidebar sidebar-shadow">
                <div className="app-header__logo">
                    <div className="logo-src"/>
                    <div className="header__pane ml-auto">
                        <div>
                            <button
                                type="button"
                                className="hamburger close-sidebar-btn hamburger--elastic"
                                data-class="closed-sidebar"
                            >
                <span className="hamburger-box">
                  <span className="hamburger-inner"/>
                </span>
                            </button>
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
                <div className="app-header__menu">
          <span>
            <button
                type="button"
                className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
            >
              <span className="btn-icon-wrapper">
                <i className="fa fa-ellipsis-v fa-w-6"/>
              </span>
            </button>
          </span>
                </div>

                <LeftSideBarInner/>
            </div>
        );
    }
}

export default LeftSideBar;
