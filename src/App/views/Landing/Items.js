import React from "react";

//components
import Breadcrumbs from "./Items/components/Breadcrumbs";
import Sidebar from "./Items/container/sidebar.container";
import MainContent from "./Items/container/MainContent";

//Css
import './Items/assets/css/categories_responsive.css'
import './Items/assets/css/categories_styles.css'


const Items =()=> {

    return (
      <div className="container product_section_container">
        <div className="row">
          <div className="col product_section clearfix">

            {/*<Breadcrumbs/>*/}
            {}
            <Sidebar/>
            {}
            <MainContent

            />
          </div>
        </div>
      </div>
    );
  }


export default Items;
