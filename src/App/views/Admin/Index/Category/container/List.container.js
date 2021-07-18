import {connect} from "react-redux";

import List from "../list";

//actions
import * as Actions from "../../../../../../Store/Category/store/category_actions";
import * as Selectors from "../../../../../../Store/Category/store/category_selectors";
import * as Functions from "../../../../../../Store/Category/store/functions";


const mapStateToProps = state => ({
    currentPageItems: Selectors.getCurrentPageItems(state),
    status: Selectors.getStatus(state),
    filter: Selectors.getFilter(state)
});

const mapDispatchToProps = dispatch => {
    return {
        fetchCurrentPageItems: () => dispatch(Functions.fetchCurrentPageCategories()),
        receivedSingleItem: (group) => dispatch(Actions.receivedSingle(group)),
        deleteFunction: (id) => dispatch(Functions.Delete(id)),
        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
