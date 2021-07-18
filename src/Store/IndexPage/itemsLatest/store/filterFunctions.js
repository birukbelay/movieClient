import * as types from './Types'
import * as Helpers from "./allConfig/configItems.selectors";

import* as Actions from "./actions";
import {fetchIfNeeded, fetchFiltered} from "./functions";
import {getFilter} from "./selector";

//


export const setCurrentFilter = (groupId, type, pageNo) => (dispatch, getState) => {
    // this  will save the filter before it is edited
    const filter = getFilter(getState());
    //this will edit the filter for api function
    dispatch(Actions.editFilter(groupId, type));
    //this must come after edit filter so that  ChangeConfigId to work
    const ConfigId = Helpers.getConfigId(getState(), type, groupId);
    return dispatch(fetchIfNeeded(ConfigId, pageNo, groupId, type, filter))
};

//===================================SetFilter================
//Called by the ui; updates the selected config;  calls `fetchProductsIfNeeded`
export const setLatestGeneralFilter = (groupId, type, pageNo) => (dispatch, getState) => {
    const ConfigId = Helpers.getConfigId(getState(), type, groupId);
    const filter = getFilter(getState());
    //this is for the api function
    dispatch(Actions.editFilter(groupId, type));
    return dispatch(fetchIfNeeded(ConfigId, pageNo, groupId, type, filter))
};//Called by the ui; updates the selected config;  calls `fetchProductsIfNeeded`


//Called by the ui; updates the selected config;  calls `fetchProductsIfNeeded`
export const setGenres = (groupId, pageNo) => (dispatch, getState) => {
    const ConfigId = Helpers.getConfigId(getState(), types.ConfigTyp.GENRE, groupId);
    const filter = getFilter(getState());
    dispatch(Actions.editFilter(groupId,  types.ConfigTyp.GENRE));
    return dispatch(fetchIfNeeded(ConfigId, pageNo, groupId, types.ConfigTyp.GENRE, filter))
};
//====================================================================


