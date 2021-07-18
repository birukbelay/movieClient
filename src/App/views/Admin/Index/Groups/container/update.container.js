import {connect} from "react-redux";
import UpdateForm from "../UpdateForm";

import {getStatus, getSelectedItem} from "../../../../../../Store/Groups/store/selectors";
import {Update} from "../../../../../../Store/Groups/store/functions";



const mapStateToProps = (state) => ({
    status:getStatus(state),
    selectedItem:getSelectedItem(state)
});

export default connect(
    mapStateToProps,
    {updateFunction: Update}
    )
(UpdateForm)