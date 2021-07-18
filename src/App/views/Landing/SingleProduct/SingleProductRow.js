import React from "react";
import ProductImages from "./ProductBody/ProductImages";
import ProductDetails from "./ProductBody/ProductDetails";

const SingleProductRow  = ({item, addToCart}) => {

    return (
      <div className="row">
        <ProductImages item={item}/>
        <ProductDetails item={item}
                        addToFavorite={addToCart}
        />
      </div>
    );

}

export default SingleProductRow;
