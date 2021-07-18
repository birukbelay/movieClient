import {ConfigT} from "../item_types";
import {getBase, getFilter} from "../item_selector";


export const getConfigPages = (state, configId) => {
    return  getBase(state).allConfigs[configId];
}
//c
export const shouldFetchProducts = (state, configId, pageNo) => {
    const config = getConfigPages(state, configId)
    // console.log(configId);
    if (!config) {
        return true
    }
    const page = config[pageNo];
    if (!page) {
        return true
    }
    if (page.isFetching) {
        return false
    }
    return page.didInvalidate
};

// Returns a config Id using the config Type, and configValue
export const getConfigId = (state, configType, configId) => {
    // console.log(components);
    const filter = getFilter(state);

    switch (configType) {
        case ConfigT.GENRE:
            return configId + "-" + filter.categoryId + "-" + filter.typeId + "-" + filter.sortType;
        case ConfigT.CATEGORY:
            return filter.genresId + "-" + configId + "-" + filter.typeId + "-" + filter.sortType;
        case ConfigT.TYPE:
            return filter.genresId + "-" + filter.categoryId + "-" + configId + "-" + filter.sortType;
        case ConfigT.SORT_BY:
            return filter.genresId + "-" + filter.categoryId + "-" + filter.typeId + "-" + configId;
        default:
            return filter.genresId + "-" + filter.categoryId + "-" + filter.typeId + "-" + filter.sortType
    }
};