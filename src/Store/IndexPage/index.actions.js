import {LOADING_DATA} from "./index.types";
import * as types from "./index.types";
import * as gConsts from "../../Constants/constants";


// after recieving genres
const receivedInitialState = ( indexState) => ({
    type: types.RECEIVED_LANDING_PAGE,
    indexState,
    recievedAt:Date.now()
})



//calling the  Method
export const getIndexPage = () => async (dispatch) => {
    try {
        dispatch({ type: LOADING_DATA });
        const response =await  ApiGetIndex()
        dispatch(receivedInitialState( response))
    }catch (e) {
        console.log("GetCtgErr",e)
        dispatch({ type: types.NETWORK_ERRORS, e });
    }
}

async function ApiGetIndex() {

    let query = gConsts.API_ROOT+`index`

    const res = await fetch(query);
    return await res.json()
}