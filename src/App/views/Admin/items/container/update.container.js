import {connect} from "react-redux";

import UpdateItemForm from "../updateItem";

import {getStatus, getSelectedItem} from "../store/item_selector";
import {updateItem} from "../store/items_repo";
import {getCurrentPageItems} from "../../../../../Store/Category/store/category_selectors";
import * as Selectors from "../../../../../Store/Genres/store/genres.selectors";

const mapActionsToProps = { updateItem };

const mapStateToProps = (state) => ({
    status:getStatus(state),
    categories:  getCurrentPageItems(state),
    genres:  Selectors.getCurrentPageItems(state),
    selectedItem:getSelectedItem(state)
});

export default connect(
    mapStateToProps,
    mapActionsToProps)
(UpdateItemForm)