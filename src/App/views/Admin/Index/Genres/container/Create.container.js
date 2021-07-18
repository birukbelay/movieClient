import {connect} from "react-redux";
import CreateForm from "../CreateForm";
import {getStatus} from "../../../../../../Store/Genres/store/genres.selectors";
import {Create} from "../../../../../../Store/Genres/store/genres.functions";

const mapStateToProps = (state) => ({
    status:getStatus(state),
});

export default connect(
    mapStateToProps,
    {CreateGroup: Create})
(CreateForm)