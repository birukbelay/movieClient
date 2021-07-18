import React from "react";

import {LocalImg} from "Constants/constants";
import {Link} from "react-router-dom";

function BestSellersSlider ({currentPageItems, filter, NextPage, PrevPage, selectItem}) {
  let haveNextPage = filter.haveNextPage
  let havePreviousPage = filter.havePreviousPage

  const hasProducts= currentPageItems!== undefined&&currentPageItems.length>0;
  const node =hasProducts? currentPageItems.map(item=>
      <BestSellersItem
          selectItem={()=>selectItem(item)}
      key={item.id}
      item={item}
  />):"no items"
  return (
      <div className="row">
        <div className="col">
          <div className="product_slider_container">
            <div className="owl-carousel owl-theme product_slider custom1-flex-container">
               {node}

            </div>
            {havePreviousPage&&<div onClick={()=>PrevPage()} className="product_slider_nav_left product_slider_nav d-flex align-items-center justify-content-center flex-column">
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </div>}
            {haveNextPage&&<div  onClick={()=>NextPage()} className="product_slider_nav_right product_slider_nav d-flex align-items-center justify-content-center flex-column">
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </div>}

          </div>
        </div>
      </div>
    );

}

export default BestSellersSlider;
function BestSellersItem ({item, selectItem}) {
    return (
        <div className="owl-item product_slider_item">
          <div className="item-item">
            <div className="item discount">
                < Link onClick={()=>selectItem()} to={"/single"}>
                    <div className="product_image">

                        <img   src={LocalImg(item.image)} alt="" />
                    </div>
                </Link>

              <div className="favorite favorite_left" />
              <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                <span>{item.year}</span>
              </div>
              <div className="product_info">
                <h6 className="product_name">
                    < Link onClick={()=>selectItem()} to={"/single"}>
                        {item.title}
                    </Link>
                </h6>
                <div className="product_price">
                  {/*$520.00<span>$590.00</span>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
    );

}
