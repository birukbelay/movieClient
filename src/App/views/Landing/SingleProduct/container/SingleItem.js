import {connect} from "react-redux";

import SingleItemPage from "../SingleItemPage";
import {getBase} from "../../../Admin/items/store/item_selector";

const mapStateToProps = state => ({
    item: getBase(state).selectedItem.localItem
})

export default connect(
    mapStateToProps,
    {  }
)(SingleItemPage)
