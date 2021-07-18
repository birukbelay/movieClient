
//NF
export const getGroups = (state) => {
    return state.landing.groups;
}

//N
export const getStatus = (state) => {
    return getGroups(state).status;
}
//NF
//single group
export const getSelectedItem = (state) => {
    return getGroups(state).selectedItem;
}
//N
// dont know why it would be useFul
export const getPage = (state, page) => {
    return getGroups(state).pages[page];
}

//N
export const getFilter = (state) => {
    return getGroups(state).filter
}
//N
export const getItem = (state, id) => {
   return getGroups(state).itemsById[id];
}
//N
//called from the ui to get current page Store
export const getCurrentPageItems = (state) => {
    const pages = getGroups(state).pages
    const page= getGroups(state).filter.selectedPage
    const singlePage=pages[page]
    if (singlePage === undefined ) {
        return []
    }


    return singlePage.ids.map(id => getItem(state, id));
}
//n
export const getAllPages = (state) => {
    const pages = getGroups(state).pages
    return pages.allIds.map(id => getItem(state, id));
}

//N
export const shouldFetchItems = (state, pageNo) => {
    const page =getGroups(state).pages[pageNo]
    if (!page) {
        return true
    }
    if (page.isFetching) {
        return false
    }
    return page.didInvalidate
};

