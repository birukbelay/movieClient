
//NF




export const getCategories = (state) => {
    return state.landing.latest;
}

//N
export const getStatus = (state) => {
    return getCategories(state).status;
}
//NF
//single group
export const getSelectedItem = (state) => {
    return getCategories(state).selectedItem;
}
//N
// dont know why it would be useFul
export const getPage = (state, page) => {
    return getCategories(state).pages[page];
}

//N
export const getFilter = (state) => {
    return getCategories(state).filter
}
//N
export const getItem = (state, id) => {
   return getCategories(state).itemsById[id];
}
//N
//called from the ui to get current page Store
export const getCurrentPageItems = (state) => {
    const pages = getCategories(state).pages
    const page= getCategories(state).filter.selectedPage
    const singlePage=pages[page]
    if (singlePage === undefined ) {
        return []
    }


    return singlePage.ids.map(id => getItem(state, id));
}
//n
export const getAllPages = (state) => {
    const pages = getCategories(state).pages
    return pages.allIds.map(id => getItem(state, id));
}

//N
export const shouldFetchItems = (state, pageNo) => {
    const page =getCategories(state).pages[pageNo]
    if (!page) {
        return true
    }
    if (page.isFetching) {
        return false
    }
    return page.didInvalidate
};

