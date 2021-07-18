import {connect} from "react-redux";
import CreateItemForm from "../CreateItem";
//
import {getStatus} from "../store/item_selector";

import {getCurrentPageItems} from "../../../../../Store/Category/store/category_selectors";
import {CreateItem} from "../store/items_repo";
import * as Selectors from "../../../../../Store/Genres/store/genres.selectors";

const mapActionsToProps = { uploadImage: CreateItem };

const mapStateToProps = (state) => ({
    status:getStatus(state),
    categories:  getCurrentPageItems(state),
    genres:  Selectors.getCurrentPageItems(state)
});

export default connect(
    mapStateToProps,
    mapActionsToProps)
(CreateItemForm)