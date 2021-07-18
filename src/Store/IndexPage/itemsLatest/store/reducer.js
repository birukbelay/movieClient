import {combineReducers} from 'redux'
import allConfigs from './allConfig/allConfigs.reducer'

import * as types from "./Types";
import {ConfigTyp, FETCH_SUCCESS, NEXT_PAGE, PREVIOUS_PAGE, SELECT_ITEM} from "./Types";
import {Query, Status} from "../../../store.types";
// ============================-- AllProducts --===========================
//this is items sorted by id
const itemsById = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      // console.log("action--=-",action)
      //when the product was recieved first as products from server
      // action == {type:"recieveProduct", products:[{}, {}]}
      return {
        ...state,
        // this is converting the array of products to object of type {id:{}, id:{}}
        ...action.items.reduce((obj, items) => {
          // console.log("obj=}",obj, "pro-",product)
          obj[items.id] = items;
          return obj
        }, {})
        // ...action.items

      };
    case types.UPDATE_SUCCESS:
      return {
        ...state,
        [action.item.id]: action.item
      }
    default:
      //TODO remove this
      // const { productId } = action;
      // if (productId) {
      //   return {
      //     ...state,
      //     [productId]: singleItem(state[productId], action)
      //   }
      // }
      return state
  }
};


// const initialStatus = {
//   loadStatus:Status.RESET,
//   uploadStatus: Status.RESET,
//   deleteStatus: Status.RESET,
//   updateStatus: Status.RESET,
//   errors: {}
// }
const initialStatus = {
  loadStatus:Status.NORMAL,
  uploadStatus:Status.NORMAL,
  queryType:Query.LOAD,
  errors: {},
  showNotification:false
}
const status = (state = initialStatus, action) => {
  switch (action.type) {
      //loading
    case types.REQUEST_PAGE:
      return {
        ...state,
        loadStatus: Status.LOADING,
        queryType: Query.LOAD
      }
    case types.UPLOADING:
      return {
        ...state,
        uploadStatus: Status.LOADING,
        queryType: Query.CREATE
      }
      //    SUCCESS
    case types.FETCH_SUCCESS:
    case types.SET_CONFIG_ID:
      return {
        ...state,
        loadStatus: Status.SUCCESS,
        queryType: Query.LOAD
      }
    case types.UPLOAD_SUCCESS:
      return {
        ...state,
        uploadStatus: Status.SUCCESS,
        queryType: Query.CREATE
      }
    case types.UPDATE_SUCCESS:
      return {
        ...state,
        uploadStatus: Status.SUCCESS,
        queryType: Query.UPDATE
      }
    case types.DELETE_SUCCESS:
      return {
        ...state,
        uploadStatus: Status.SUCCESS,
        queryType: Query.DELETE
      }
      //    Errors
    case types.LOAD_ERROR:
      return {
        ...state,
        loadStatus: Status.ERROR,
        queryType: Query.LOAD
      }
    case types.UPLOAD_ERROR:
      return {
        ...state,
        uploadStatus: Status.ERROR,
        queryType: Query.CREATE,
        errors: action.error
      }
    case types.UPDATE_ERROR:
      return {
        ...state,
        uploadStatus: Status.ERROR,
        queryType: Query.UPDATE
      }
    case types.DELETE_ERROR:
      return {
        ...state,
        uploadStatus: Status.ERROR,
        queryType: Query.DELETE,
        errors: action.error
      }
    default:
      return state
  }
};


const initialState = {
  item: {},
  localItem: {},
  loading: false,
  loadStatus: Status.NORMAL,
  loadSuccess: false,
  loadError: false,
  errorMessage: ""
}

//======================================- State -========================================
export const selectedItem = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return {
        ...state,
        localItem: action.item
      }
    case types.ITEM_FETCH_SUCCESS:
      return {
        ...state,
        loadStatus: Status.SUCCESS,
        item: action.item
      }
    case types.ITEM_REQUEST_SINGLE:
      return {
        ...state,
        loadStatus: Status.LOADING,
      }
    case types.ITEM_LOAD_ERROR:
      return {
        ...state,
        loadStatus: Status.ERROR,
      }
    default:
      return state
  }
};


const initFilter = {
  id: "",
  typeId: "",
  categoryId: "",
  genresId: "",
  sortType: "",
  "selectedPage": 1,
  "haveNextPage": true,
  "havePreviousPage": false,
  status: 3
};
export const filter = (state = initFilter, action) => {
  // console.log(action)
  switch (action.type) {
    case types.RESET_FILTER:
      return action.oldFilter
    case ConfigTyp.GENRE:
      return {
        ...state,
        genresId: action.id
      }
    case ConfigTyp.CATEGORY:
      return {
        ...state,
        categoryId: action.id
      }
    case ConfigTyp.TYPE:
      return {
        ...state,
        typeId: action.id
      }
    case ConfigTyp.SORT_BY:
      return {
        ...state,
        sortType: action.id
      }
    case types.FETCH_SUCCESS:
      return {
        ...state,
        id: action.configId,
        status: 1,
        selectedPage: selectedPage(state.selectedPage, action),
      }
    case types.SET_CONFIG_ID:
      return {
        ...state,
        id: action.configId,
        status: 1,
      }
    case types.NEXT_PAGE:
      return {
        ...state,
        havePreviousPage: true,
        selectedPage: action.id

      }
    case types.PREVIOUS_PAGE:
      return {
        ...state,
        haveNextPage: true,
        selectedPage: action.id
      }
    case types.LAST_PAGE_REACHED:
      return {
        ...state,
        haveNextPage: false
      }
    case types.FIRST_PAGE_REACHED:
      return {
        ...state,
        havePreviousPage: false
      }
      // case types.REQUEST_PAGE_ITEMS:
      //   return {
      //     ...state,
      //     status:Status.LOADING
      //   }
      // case types.LOAD_ITEMS_ERROR:
      //   return {
      //     ...state,
      //     status:Status.ERROR
      //   }
    default:
      return state
  }
};
// This Selected Page the user Sees& is a number
const selectedPage = (state = 1, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.pageNo;
    case PREVIOUS_PAGE:
    case NEXT_PAGE:
      return action.id;
    default:
      return state
  }
}

// This is the components
export default combineReducers({
  filter,
  allConfigs: allConfigs,
  selectedItem,
  itemsById,
  status
  // visibleIds
})
//===================================================================================

//------------------------------------------------------------------------


//========================================================
//Depricated
// TODO remove this or change it to all Visible Ids
// const all = (Data = [], action) => {
//   switch (action.type) {
//     case types.FETCH_PRODUCTS_SUCCESS:
//       return action.items.map(product => product.id);
//     default:
//       return Data
//   }
// };
//