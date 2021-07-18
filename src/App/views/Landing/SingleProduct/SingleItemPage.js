import React from "react";

import Tabs from "./components/Tabs";
import Breadcrumbs from "./components/Breadcrumbs";
import SingleProductRow from "./SingleProductRow";
// css
import './assets/css/single_responsive.css'
import './assets/css/single_styles.css'


const SingleItemPage= ({item})=> {
    return (
      <>
        <div className="container single_product_container">
          <div className="row">
            <div className="col">
              {/*<Breadcrumbs/>*/}
            </div>
          </div>
          <SingleProductRow item={item}/>
        </div>

        {/*<Tabs/>*/}

      </>
    );

}



export default SingleItemPage
