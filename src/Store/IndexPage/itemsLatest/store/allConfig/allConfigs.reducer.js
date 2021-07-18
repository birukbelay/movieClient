import * as types from "../Types";

//c
const allConfigs = (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_ERROR:
    case types.INVALIDATE_PAGE:
    case types.FETCH_SUCCESS:
    case types.REQUEST_PAGE:
      return {
        ...state,
        [action.configId]: singleConfig(state[action.configId], action)
      };
    default:
      return state
  }
};

// // This is A single Config  b-c-sh-so
// const singleConfig =  {
//    1:{
//        isFetching: false,
//        didInvalidate: false,
//        groupIds: []},
//    2:{
//    },
//   "subCategories":[],
//   "brands":[],
//   "shops":[],
// };

//  this is b-c-sh-so & returns all page of that config
//c
const singleConfig = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
    case types.INVALIDATE_PAGE:
      //TODO  case types.REQUEST_PAGE: // if this is un commented every time the user reaches the last cashed page,
      //when it asks for more it will create an additional empty page because on configured products,
      //every time next pageis pressed it dispatches request page & then empty page with the page no is created
      //    soln  1. create to check if items is empty on request page
      //           2. create a external variable for loading if fetching from external Data source is needed
      //            3. may be you dont realy need it you have suspense
      return {
        ...state,
        [action.pageNo]: page(state[action.page], action)
      }
    default:
      return state
  }
}

//c
const page = (state = {
  isFetching: false,
  didInvalidate: false,
  ids: []
}, action) => {
  switch (action.type) {
    case types.INVALIDATE_PAGE:
      return {
        ...state,
        didInvalidate: true
      };
    case types.REQUEST_PAGE:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case types.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        ids: action.items.map(item => item._id),
        lastUpdated: action.receivedAt
      };
    default:
      return state
  }
};


export default allConfigs