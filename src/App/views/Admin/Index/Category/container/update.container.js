import {connect} from "react-redux";
import UpdateForm from "../UpdateForm";

import {getStatus, getSelectedItem} from "../../../../../../Store/Category/store/category_selectors";
import {Update} from "../../../../../../Store/Category/store/functions";



const mapStateToProps = (state) => ({
    status:getStatus(state),
    selectedItem:getSelectedItem(state)
});

export default connect(
    mapStateToProps,
    {updateFunction: Update}
    )
(UpdateForm)