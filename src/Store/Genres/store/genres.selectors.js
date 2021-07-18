
//NF
export const getGenres = (state) => {
    return state.landing.genres;
}

//N
export const getStatus = (state) => {
    return getGenres(state).status;
}
//NF
//single group
export const getSelectedItem = (state) => {
    return getGenres(state).selectedItem;
}
//N
// dont know why it would be useFul
export const getPage = (state, page) => {
    return getGenres(state).pages[page];
}

//N
export const getFilter = (state) => {
    return getGenres(state).filter
}
//N
export const getItem = (state, id) => {
   return getGenres(state).itemsById[id];
}
//N
//called from the ui to get current page Store
export const getCurrentPageItems = (state) => {
    const pages = getGenres(state).pages
    const page= getGenres(state).filter.selectedPage
    const singlePage=pages[page]
    if (singlePage === undefined ) {
        return []
    }


    return singlePage.ids.map(id => getItem(state, id));
}
//n
export const getAllPages = (state) => {
    const pages = getGenres(state).pages
    return pages.allIds.map(id => getItem(state, id));
}

//N
export const shouldFetchItems = (state, pageNo) => {
    const page =getGenres(state).pages[pageNo]
    if (!page) {
        return true
    }
    if (page.isFetching) {
        return false
    }
    return page.didInvalidate
};

