import {connect} from "react-redux";
import CreateForm from "../CreateForm";
import {getStatus} from "../../../../../../Store/Category/store/category_selectors";
import {Create} from "../../../../../../Store/Category/store/functions";

const mapStateToProps = (state) => ({
    status:getStatus(state),
});

export default connect(
    mapStateToProps,
    {Upload: Create})
(CreateForm)