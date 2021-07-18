import * as gConsts from "../../../../../Constants/constants";
import axios from "axios";
import {ConfigProductsLimit} from "../../../../../Constants/constants";

export async function ApiGetSingle(id) {

    let query = gConsts.API_ROOT + `items/one/${id}`

    const res = await fetch(query);
    return await res.json()
}
export async function ApiCreate(formData) {

    let query = gConsts.API_ROOT + 'secured/items/'

    const res = await axios.post(query , formData)
    return await res
}
export async function ApiDelete(id) {

    let query = gConsts.API_ROOT + `secured/items/delete/${id}`
    const res = await axios.delete(query)
    return await res
}

export async function ApiUpdate(formData, id) {

    let query = gConsts.API_ROOT +  `secured/items/update/${id}`

    const res = await axios.put(query , formData)
    return await res
}

export async function ApiGetFiltered(filter, pageNo) {

    let category = filter.categoryId;
    let genre = filter.genresId;
    let type = filter.typeId;
    let sort = filter.sortType;
    let configFilter = `&category=${category}&genres=${genre}&types=${type}&sort=${sort}`

    let query = gConsts.API_ROOT + `items/filter?limit=${ConfigProductsLimit}&offsetValue=${pageNo}` + configFilter


    const res = await fetch(query);
    return await res.json()
}