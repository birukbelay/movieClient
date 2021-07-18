import * as types from "./types";
import * as API  from "./api/api";

import  * as SELECTORS from "./selectors";

import * as ACTIONS from "./actions";


//====================================================
//=======These 2 basically do the same thing

//NT
//directly Get Group from api
export const fetchCurrent_Best_Page = ()=> (dispatch, getState) => {
    const filter = SELECTORS.getFilter(getState());
    dispatch(fetchManyIfNeeded(filter.selectedPage, types.SET_PAGE))
}
// //call
// const getSelectedGroup = (dispatch, getState) => {
//     const filter = SELECTORS.getGroupFilter(getState());
//     dispatch(FetchGroups(filter.selectedPage))
// }

//=================================================================

//N
//This could be called by setPage- pageNo&id R views ./ or from setFilter
export const fetchManyIfNeeded = (pageNo, type) => (dispatch, getState) => {
    if (SELECTORS.shouldFetchItems(getState(), pageNo)) {
        return dispatch(FetchMany(pageNo, type))
    } else {
        console.log("000----, ", pageNo)
        ///Used For setting views & setting the filter
        ///if type is nextPage it dispatches nextPage
        return dispatch(ACTIONS.setPage(type, pageNo ));

    }
};

//NT
export const NextPage =()=> (dispatch) => {
        return dispatch(Pagination(types.NEXT_PAGE));
};
//NT
export const PrevPage =()=> (dispatch) => {
        return dispatch(Pagination(types.PREVIOUS_PAGE));
};

//NT
// setPage  is called by the ui; Increases, decreases Page & calls fetchProductsIfNeeded
export const Pagination = (type) => (dispatch, getState) => {
    const filter = SELECTORS.getFilter(getState());
    let page = filter.selectedPage;
    switch (type) {
        case types.NEXT_PAGE:
            // console.log("NEXT_PAGE", page)
            page++;
            // console.log("NEXT_PAGE", page)
            break;
        case types.PREVIOUS_PAGE:
            if (type === types.PREVIOUS_PAGE && page <= 2) {
                // console.log("PREV_PAGE First page dispatch", page)
                page = 1;
                dispatch({type: types.FIRST_PAGE_REACHED});
                break;
            }
            // console.log("prev_PAGE", page)
            page--;
            console.log("prev_PAGE", page)
            break;
        default:
            page = filter.selectedPage

    }
    //this uses the page as id because it dispatches it with the type and the payload will be the page
    return dispatch(fetchManyIfNeeded(page, type))

};

//============================================Api functions =====================================

export const FetchMany = (pageNo, type) => async (dispatch) => {
        dispatch({type: types.FETCHING});
    try {
        //=====MOCK=======================
        // shop.getGroups(categories => {
        //     dispatch(receivedGroups( categories, pageNo))
        // })

        //==========================================================================
        //this sets th e page by calling Next- Page & prev page
        //=========================================================================
        //used for pagination
        // dispatch(ACTIONS.setPage(type, pageNo) )

        const response = await API.ApiGetMany(pageNo)

        if (response.items == null) {
            //FixMe
            dispatch({type: types.LAST_PAGE_REACHED});


            return
        }
        if (response.items.length < types.GenresLimit) {
            dispatch({type: types.LAST_PAGE_REACHED})

        }
        //this is used for pagination
        dispatch(ACTIONS.setPage(type, pageNo ))
        dispatch(ACTIONS.receivedMany(response.items, pageNo))
    //    =================================================================================
    } catch (e) {
        dispatch(ACTIONS.fetchERROR(e));
    }
}

export const Create = (formData) => async (dispatch) => {
    dispatch({type: types.UPLOADING});
    try {
        const res = await API.ApiCreate(formData)
        dispatch({type: types.UPLOAD_SUCCESS});
        dispatch({type: types.INVALIDATE_ALL});
        dispatch(fetchCurrent_Best_Page());
        // return true
    } catch (err) {
        dispatch(ACTIONS.createERROR(err));
    }
};

export const Update = (formData, id) => async (dispatch) => {
    dispatch({type: types.UPLOADING});
    try {
        const res = await API.ApiUpdate(formData, id)
        dispatch(ACTIONS.update(res.data));
    } catch (err) {
        dispatch(ACTIONS.updateERROR(err));
    }
};

export const Delete = (id) => async (dispatch) => {
    dispatch({type: types.UPLOADING});
    try {
        const res = await API.ApiDelete(id)
        dispatch({type: types.DELETE_SUCCESS});
        dispatch({type: types.INVALIDATE_ALL});
        dispatch(fetchCurrent_Best_Page());
    } catch (err) {
        dispatch(ACTIONS.deleteERROR(err));
    }
};