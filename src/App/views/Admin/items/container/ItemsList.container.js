import {connect} from "react-redux";

import ItemsList from "../ItemsList";
import {getFilter, getStatus, getSelectedFilterItems} from "../store/item_selector";
import {setGeneralFilter} from "../store/filter_Functions";
import * as Actions from "../store/item_actions";
import {deleteItem} from "../store/items_repo";
// - user
// - FrontPage
// - Item
//      - selectedItem
//      - allitems ById
//      - allConfigs
//
//          - b-c-s-c{}
//          - b-c-s-c{}
//          - b-c-s-c{}


const mapStateToProps = state => ({
    currentPageItems: getSelectedFilterItems(state),
    status:getStatus(state),
    filter:getFilter(state)
});

const mapDispatchToProps = dispatch => {
    return {
        selectItem: (item) => dispatch(Actions.selectItem(item)),
        deleteItem: (id) => dispatch(deleteItem(id)),
        setFilter: () => dispatch(setGeneralFilter("","",1)),

        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsList)
