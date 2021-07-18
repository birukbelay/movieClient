import React, {useState} from "react";
import { NetworkImage} from "Constants/constants";

function SideImage({path}) {
  return <img

      // onClick={()=>setImg()}
      src={path}
      alt="."
      data-image="images/single_1.jpg"
  />;
}

function SideImages({path, setImage,  id}) {
  const setImg=()=>{
    setImage()
  }
  return <li onClick={setImg} className="active">
    <img onClick={()=>setImage()}
        src={path+id}
        alt="."
        data-image="images/single_2.jpg"
    />
  </li>;
}

function ProductImages ({item}) {

  const [display, setDisplay]= useState(item.image);

  const images = item.images!== undefined?
    item.images.map( image=>
        <SideImages  id={image}  setImage={()=>setDisplay(image)}   path={NetworkImage(item.path, "")}/>
    ):""
    return (
      <div className="col-lg-7">
        <div className="single_product_pics">
          <div className="row">
            <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
              <div className="single_product_thumbnails">
                <ul>
                  <li onClick={()=>setDisplay(item.image)}>
                    <SideImage path={NetworkImage(item.path, item.image)}/>
                  </li>

                  { images}

                </ul>
              </div>
            </div>
            <div className="col-lg-9 image_col order-lg-2 order-1">
              <div className="single_product_image">
                <div
                    className="single_product_image_background"
                    style={{
                      backgroundImage: `url(${NetworkImage(item.path, display)})`
                    }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default ProductImages;
