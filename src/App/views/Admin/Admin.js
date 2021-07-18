import React from "react";
import { Switch, Route,  useRouteMatch} from 'react-router-dom'

//components
import HeaderTopBar from "./components/HeaderTopBar";
import RightSideBar from "./components/dumb.components/rightSideBar/RightSideBar";
import LeftSideBar from "./LeftSideBar";
import MainContentHeader from "./components/dumb.components/MainContentHeader";
import MainContentCardsRow from "./components/dumb.components/MainContentCardsRow";
import MainContentFooter from "./components/dumb.components/MainContentFooter";
//Items
import ItemsList from "./items/container/ItemsList.container";
import CreateItemFormContainer from './items/container/CreateItem.container'
import updateItem from './items/container/update.container'
//Groups
import CreateGroupForm from "./Index/Groups/container/Create.container";
import GroupList from "./Index/Groups/container/List.container";
import UpdateGroupForm from "./Index/Groups/container/update.container";
//Categories
import GenresCreate from "./Index/Genres/container/Create.container";
import GenresUpdate from "./Index/Genres/container/update.container";
import GenresList from "./Index/Genres/container/List.container";
//Categories
import CategoryCreate from "./Index/Category/container/Create.container";
import CategoryUpdate from "./Index/Category/container/update.container";
import CategoryList from "./Index/Category/container/List.container";

//
//css
import './assets/css/main.css'

const NoMatchPage = () => {
    return (
        <h3>404 - Not found</h3>
    );
};

function MainContent (){
    let match = useRouteMatch();
    return (
        <div className="app-main__outer">
            <div className="app-main__inner">

                <MainContentHeader/>
                <Switch>
                    <Route exact path={`${match.path}/`} component={MainContentCardsRow} />
                    {/*Items*/}
                    <Route path={`${match.path}/item/list`} component={ItemsList} />
                    <Route  path={`${match.path}/item/add`} component={CreateItemFormContainer} />
                    <Route  path={`${match.path}/item/edit`} component={updateItem} />
                    {/*Groups*/}
                    <Route path={`${match.path}/group/list`} component={GroupList} />
                    <Route  path={`${match.path}/group/add`} component={CreateGroupForm} />
                    <Route  path={`${match.path}/group/edit`} component={UpdateGroupForm} />
                    {/*Categories*/}
                    <Route path={`${match.path}/genres/list`} component={GenresList} />
                    <Route  path={`${match.path}/genres/add`} component={GenresCreate} />
                    <Route  path={`${match.path}/genres/edit`} component={GenresUpdate} />
                    {/*Categories*/}
                    <Route path={`${match.path}/category/list`} component={CategoryList} />
                    <Route  path={`${match.path}/category/add`} component={CategoryCreate} />
                    <Route  path={`${match.path}/category/edit`} component={CategoryUpdate} />
                    <Route component={NoMatchPage} />
                </Switch>


            </div>
            <MainContentFooter/>
        </div>
    );

}


class Admin extends React.Component {
    render() {
        return (
            <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">

                <HeaderTopBar/>

                <RightSideBar/>

                <div className="app-main">
                    <LeftSideBar/>
                    <MainContent/>
                </div>
            </div>
        );
    }
}

export default Admin;
