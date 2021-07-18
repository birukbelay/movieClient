import React, {useEffect} from "react";

import {Link} from "react-router-dom";
import Item from "./Item";
import Pagination from "./container/pagination.container";
import {ProductSorting} from "./components/product sorting";

const MainContent =({ items,  selectItem, setFilter})=> {


    // useEffect(() => {
    //     setFilter()
    // }, []);

    const hasProducts= items!== undefined&&items.length>0;
  // console.log(products)
  const nodes = hasProducts ? (
      items.map(item =>
          <Item
              key={item.id}
              item={item}


              selectItem={()=>selectItem(item)}
          />
      )
  ) : (
      <div><Link to="/" ><em>no  Items in this page. Go back To main Page</em></Link></div>
  )
    return (
      <div className="main_content">
        {}
        <div className="products_iso">
          <div className="row">
            <div className="col">
              {}
              {/*<ProductSorting/>*/}
              {}
              <ItemsGrid>
                {nodes}
              </ItemsGrid>

              <Pagination/>
            </div>
          </div>
        </div>
      </div>
    );

}

export default MainContent;

const ItemsGrid =({ children })=> {

    return (
        <div className="item-grid"
             style={{
                 display: "flex",
                 flexWrap: "wrap",
                 justifyContent:"center"
             }}
        >
            { children }
        </div>
    );

}