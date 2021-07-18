
import {combineReducers} from 'redux'

import groups from '../Groups/store/reducer'
import categories  from '../Category/store/category_reducer'
import genres from '../Genres/store/genres.reducer'
import types from './itemsLatest/store/reducer'
import latest from './itemsBest/store/reducer'

  
export default combineReducers({
    types,
    latest,
    categories,
    genres,
    groups
 })
