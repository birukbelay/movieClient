//calling the  api
import axios from "axios";
import * as gConsts from "../../../../Constants/constants";


//NQ
export async function ApiGetMany(pageNo) {
    let query = gConsts.API_ROOT + `category/?limit=${gConsts.CategoryLimit}&offset=${pageNo}`
    const res = await fetch(query);
    let a = await res.json()
    console.log("ctg=======>", a)
    return await a
}

export async function ApiGetSingle(id) {

    let query = gConsts.API_ROOT + `category/one/${id}`

    const res = await fetch(query);
    return await res.json()
}

export async function ApiCreate(formData) {

    let query = gConsts.API_ROOT + 'secured/category/'

    const res = await axios.post(query , formData)
    return await res
}

export async function ApiDelete(id) {
    let query = gConsts.API_ROOT + `secured/category/delete/${id}`
    const res = await axios.delete(query)
    return await res
}

export async function ApiUpdate(formData, id) {
    let query = gConsts.API_ROOT +   `secured/category/update/${id}`
    const res = await axios.put(query , formData)
    return await res
}