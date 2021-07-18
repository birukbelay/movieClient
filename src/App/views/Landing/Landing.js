import React from "react";
import { Switch, Route,  useRouteMatch} from 'react-router-dom'
import Header from "./components/Header/Header";
import HamburgerMenu from "./components/Header/HamburgerMenu";

import Newsletter from "./components/Footer/Newsletter";
import Footer from "./components/Footer/Footer";
import Index from "./Index/Index";
import Items from "./Items";
import SingleItem from "./SingleProduct/container/SingleItem";
import {NoMatchPage} from "../../../App";
import Genres from "./Index/container/genres";
//Css
import './assets/css/main_styles.css'
import './assets/css/responsive.css'

function Landing () {
    let match = useRouteMatch();
        return (
            <div className="super_container">
                <Header/>
                <div className="fs_menu_overlay"> </div>
                <HamburgerMenu/>

                <Switch>
                    <Route exact path={`${match.path}/`} component={Index} />
                    <Route path={`${match.path}items`} component={Items} />
                    <Route path={`${match.path}single`} component={SingleItem} />
                    <Route component={NoMatchPage} />
                </Switch>
                {/*<Newsletter/>*/}
                {}
                <Footer/>
            </div>
        );

}

export default Landing;
