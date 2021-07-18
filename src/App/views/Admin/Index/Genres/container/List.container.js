import {connect} from "react-redux";

import List from "../list";

//actions
import * as Actions from "../../../../../../Store/Genres/store/genres.actions";
import * as Selectors from "../../../../../../Store/Genres/store/genres.selectors";
import * as Functions from "../../../../../../Store/Genres/store/genres.functions";


const mapStateToProps = state => ({
    currentPageItems: Selectors.getCurrentPageItems(state),
    status: Selectors.getStatus(state),
    filter: Selectors.getFilter(state)
});

const mapDispatchToProps = dispatch => {
    return {
        fetchCurrentPageItems: () => dispatch(Functions.fetchCurrentPageGenres()),
        receivedSingleItem: (group) => dispatch(Actions.receivedSingle(group)),
        deleteFunction: (id) => dispatch(Functions.Delete(id)),
        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
