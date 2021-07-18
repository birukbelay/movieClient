import {connect} from "react-redux";
//component
import Genres from "../genres/Genres";
//Actions
import {setGenres} from "../../../Admin/items/store/filter_Functions";
//filter
import {getCurrentPageItems, getAllPages} from "../../../../../Store/Genres/store/genres.selectors";

import _items from 'Data/mock/genres.json'

const mapStateToProps = (state) => ({
    genres: _items
    // genres:  getAllPages(state)
})

const mapDispatchToProps = dispatch => {
    return {
        setFilter: (id) => dispatch(setGenres(id)),
        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Genres)
