import * as gConsts from "../../../../../../Constants/constants";
import {ConfigProductsLimit} from "../item_types";
import axios from "../../../../../../../node_modules/axios";

export async function ApiGetSingle(id) {

    let query = gConsts.API_ROOT + `items/one/${id}`

    const res = await fetch(query);
    return await res.json()
}

export async function ApiCreate(formData) {

    let query = gConsts.API_ROOT + 'movies/'

    const res = await axios.post(query , formData)
    return await res
}

export async function ApiDelete(id) {

    let query = gConsts.API_ROOT + `movies/${id}`
    const res = await axios.delete(query)
    return await res
}

export async function ApiUpdate(formData, id) {

    let query = gConsts.API_ROOT +  `movies/${id}`
    const res = await axios.put(query , formData)
    return await res
}

export async function ApiGetFiltered(filter, pageNo) {
    let category = filter.categoryId;
    let genre = filter.genresId;
    let type = filter.typeId;
    let sort = filter.sortType;

    let configFilter = `&category=${category}&genres=${genre}&types=${type}&sort=${sort}`

    let query = gConsts.API_ROOT + `movies?limit=${ConfigProductsLimit}&page=${pageNo}` + configFilter


    const res = await fetch(query);
    console.log(res.data)
    return await res.json()
}