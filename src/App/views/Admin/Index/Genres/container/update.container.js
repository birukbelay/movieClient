import {connect} from "react-redux";
import UpdateForm from "../UpdateForm";

import {getStatus, getSelectedItem} from "../../../../../../Store/Genres/store/genres.selectors";
import {Update} from "../../../../../../Store/Genres/store/genres.functions";



const mapStateToProps = (state) => ({
    status:getStatus(state),
    selectedItem:getSelectedItem(state)
});

export default connect(
    mapStateToProps,
    {updateFunction: Update}
    )
(UpdateForm)