import {connect} from "react-redux";

import List from "../list";

//actions
import * as Actions from "../../../../../../Store/Groups/store/actions";
import * as Selectors from "../../../../../../Store/Groups/store/selectors";
import * as Functions from "../../../../../../Store/Groups/store/functions";


const mapStateToProps = state => ({
    currentPageItems: Selectors.getCurrentPageItems(state),
    status: Selectors.getStatus(state),
    filter: Selectors.getFilter(state)
});

const mapDispatchToProps = dispatch => {
    return {
        fetchCurrentPageItems: () => dispatch(Functions.fetchCurrentPageGroups()),
        receivedSingleItem: (group) => dispatch(Actions.receivedSingle(group)),
        deleteFunction: (id) => dispatch(Functions.Delete(id)),
        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
