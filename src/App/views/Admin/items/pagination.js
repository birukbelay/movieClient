import React from "react";
import {connect} from "react-redux";
import * as types from './store/item_types'
import {paginateItems} from "./store/items_repo";
import {getFilter} from "./store/item_selector";

 const Pagination=({selectedConfig, dispatch}) =>{
     let haveNextPage = selectedConfig.haveNextPage
     let havePreviousPage = selectedConfig.havePreviousPage

     function setPages (type){
         // console.log("pageNo--", pageNo,"type---", type)
         dispatch(paginateItems(type ))
     }

    return <div className="d-block text-center card-footer">
        <button disabled={!havePreviousPage} onClick={()=>setPages(types.PREVIOUS_PAGE)}  className="mr-2 btn-icon btn-icon-only btn btn-outline-secondary">
            {havePreviousPage&&"Prev"}
        </button>

        <button disabled={!haveNextPage} onClick={()=>setPages(types.ITEMS_NEXT_PAGE)} className="mr-2 btn-icon btn-icon-only btn btn-outline-secondary">
            {haveNextPage&&"Next"}
        </button>

        {/*<button className="btn-wide btn btn-success">Save</button>*/}
    </div>;
}

const mapStateToProps = (state) => ({
    selectedConfig:  getFilter(state)
})


export default connect(
    mapStateToProps,

)(Pagination)