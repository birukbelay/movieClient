import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'
//Component
import Pagination from "./pagination";
import {DeleteItem} from "./Delete";
//Constants
import { NetworkImage} from "Constants/constants";
import {Status} from "Store/store.types";


// import * as types from '../../../../Store/issues/issues.types'

const List=({ currentPageItems, status,   fetchCurrentPageItems,  receivedSingleItem,  deleteFunction})=>{

  const uploadStatus =status.uploadStatus
  const loadStatus = status.loadStatus

  const [displayDelete, SetDeleteDisplay]= useState(false);
  const [selectedItem, setSelectedItem]= useState({});


  useEffect(() => {
    fetchCurrentPageItems()
  }, []);

  let className = 'alert';
  if (uploadStatus===Status.ERROR|| loadStatus===Status.ERROR) {
    className += ' alert-danger';
  }else if (uploadStatus===Status.SUCCESS){
    className += ' alert-success';
  }else if (uploadStatus===Status.LOADING){
    className += ' alert-info';
  }

  const hasItems= currentPageItems!==undefined &&currentPageItems.length>0;

  const nodes = hasItems ? (
      currentPageItems.map(item=>
          <SingleItem key={item.id}
                       item={item}
                      setItem={setSelectedItem}
                      selectItem={receivedSingleItem}
                      SetDeleteDisplay={SetDeleteDisplay}


              /*{...setApproval}*/
          />
      )

  ) : (
      <NoItems/>
  )
    return (
        <div>
          <DeleteItem deleteItem={deleteFunction} setDisplay={SetDeleteDisplay} display={displayDelete} item={selectedItem}/>
          <div className="row">

            <div className={className}>

              {uploadStatus ===Status.ERROR && "There is some thing Wrong with Editing,  please try again!"}
            </div>
            <div className="col-md-12">

              <div className="main-card mb-3 card">
                <div className={className}>
                  {loadStatus === Status.ERROR && "There is some thing Wrong please try again!"}
                  {/*{uploadError && errorMessage.toString()}*/}
                  {/*{uploading && "loading"}*/}
                </div>
                <div className="card-header">
                  Movies
                  <div className="btn-actions-pane-right">
                    <div role="group" className="btn-group-sm btn-group">
                      <button className="active btn btn-focus">Preveous</button>
                      <button className="btn btn-focus">Next</button>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                    <thead>
                    <tr>
                      {/*<th className="text-center">Id</th>*/}
                      <th>name</th>

                      <th className="text-center">Detail</th>
                      <th className="text-center">Update</th>
                      <th className="text-center">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {nodes}
                    </tbody>
                  </table>
                </div>

                <Pagination/>
              </div>
            </div>
          </div>
        </div>
    );

}

export default List;

function SingleItem({item = {}, SetDeleteDisplay, setItem, selectItem}) {

  
  const history = useHistory();

  const handleDelete=()=> {
    setItem(item)
    SetDeleteDisplay(true)
  }

  const handleUpdate=()=>{
    selectItem(item)
    history.push(`edit`)
  }
  return <tr>

    <td>
      <div className="widget-content p-0">
        <div className="widget-content-wrapper">
          <div className="widget-content-left mr-3">
            <div className="widget-content-left">
              <img width="40" className="rounded-circle" src={NetworkImage(item.path, item.image)} alt=""/>
            </div>
          </div>
          <div className="widget-content-left flex2">
            <div className="widget-heading">{item.name}</div>
            <div className="widget-subheading opacity-7">{}</div>
          </div>
        </div>
      </div>

    </td>


    <td className="text-center">
      <button
          type="button"
          id="PopoverCustomT-1"
          className="btn btn-primary btn-sm"
      >
        Details
      </button>
    </td>
    <td className="text-center">
      <button
          // disabled={false}
          onClick={handleUpdate}
          type="button"
          id="PopoverCustomT-1"
          className="btn btn-outline-warning btn-sm"
      >
        UPDATE
      </button>
    </td>
    <td className="text-center">
      <button
          // disabled={}
          onClick={handleDelete}
          type="button"
          id="PopoverCustomT-1"
          className="btn btn-outline-danger btn-sm"
      >
        Delete
      </button>
    </td>
  </tr>;
}

const NoItems =()=>{
  return(
      <div className="col-md-6 col-xl-4">
        <div className="card mb-3 widget-content  bg-arielle-smile">
          <div className="widget-content-wrapper text-white">
            <div className="widget-content-left">
              <div className="widget-heading">No content</div>
              <div className="widget-subheading"> No content is found in this page</div>
            </div>

          </div>
        </div>
      </div>
  )
}