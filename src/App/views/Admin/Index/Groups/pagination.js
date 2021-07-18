import React from "react";
import {connect} from "react-redux";

import {getFilter} from "../../../../../Store/Groups/store/selectors";
import {NextPage, PrevPage} from "../../../../../Store/Groups/store/functions";

 const Pagination=({ filter, NextPage, PrevPage}) =>{
     let haveNextPage = filter.haveNextPage
     let havePreviousPage = filter.havePreviousPage

    return <div className="d-block text-center card-footer">
        <button disabled={!havePreviousPage} onClick={()=>PrevPage()} className="mr-2 btn-icon btn-icon-only btn btn-outline-secondary">
            {havePreviousPage&&"Prev"}
        </button>

        <button disabled={!haveNextPage} onClick={()=>NextPage()} className="mr-2 btn-icon btn-icon-only btn btn-outline-secondary">
            {haveNextPage&&"Next"}
        </button>

        {/*<button className="btn-wide btn btn-success">Save</button>*/}
    </div>;
}

const mapStateToProps = (state) => ({
    filter:  getFilter(state)
})


export default connect(
    mapStateToProps,
    { NextPage, PrevPage}
)(Pagination)