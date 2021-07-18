

export const getBase = (state) => {
    return state.items;
}
export const getItem = (state, id) => {
    // console.log("components--", components, "id-", id)
    return  getBase(state).itemsById[id];
}

// might not be use ful in the future it will fetch it from db, the products which have inventory
export const getSelectedFilterItems = (state) => {
    const items = getBase(state)
    const filter = items.filter

    //    this is getting the selected filter b-c-sh-so
    const selectedConfig=items.allConfigs[filter.id]
    if (selectedConfig === undefined ) {
        return {}
    }

    const singlePage= selectedConfig[filter.selectedPage]
    if (singlePage === undefined) {
        return {}
    }
    // console.log("components-",components, "config:-",config, "selectedPage", selectedPage)
    return singlePage.ids.map(id => getItem(state, id));
}

export const getSelectedItem = (state) => {
    return getBase(state).selectedItem;
}
export const getStatus = (state) => {
    return getBase(state).status;
}

export const getFilter = (state) => {
    return getBase(state).filter;
}