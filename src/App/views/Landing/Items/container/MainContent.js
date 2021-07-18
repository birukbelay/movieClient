import {connect} from "react-redux";

import MainContent from "../MainContent";
import {getSelectedFilterItems, getStatus} from "../../../Admin/items/store/item_selector";

import {setGeneralFilter} from "../../../Admin/items/store/filter_Functions";
import * as Actions from "../../../Admin/items/store/item_actions";
import _items from 'Data/mock/items.json'




const mapDispatchToProps = dispatch => {
    return {
        selectItem: (item) => dispatch(Actions.selectItem(item)),
        setFilter: () => dispatch(setGeneralFilter("","",1)),
        dispatch
    }
}

const mapStateToProps = (state) => ({
    // items: _items,
    items: getSelectedFilterItems(state ),

});

export default connect(
    mapStateToProps,
      mapDispatchToProps
)(MainContent)
