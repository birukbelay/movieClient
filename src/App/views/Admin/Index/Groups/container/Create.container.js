import {connect} from "react-redux";
import CreateForm from "../CreateForm";
import {getStatus} from "../../../../../../Store/Groups/store/selectors";
import {Create} from "../../../../../../Store/Groups/store/functions";

const mapStateToProps = (state) => ({
    status:getStatus(state),
});

export default connect(
    mapStateToProps,
    {Upload: Create})
(CreateForm)