//calling the  api
import axios from "axios";
import * as gConsts from "Constants/constants";


//NQ
export async function ApiGetMany(pageNo) {
    let query = gConsts.API_ROOT + `genres/?limit=${gConsts.GenresLimit}&offset=${pageNo}`
    const res = await fetch(query);
    let a = await res.json()
    console.log("genr=======>", a)
    return await a
    // const a=  delayGroup(100)
    // return await a
}

export async function ApiGetSingle(id) {

    let query = gConsts.API_ROOT + `genres/one/${id}`

    const res = await fetch(query);
    return await res.json()
}
export async function ApiCreate(formData) {

    let query = gConsts.API_ROOT + 'secured/genres/'

    const res = await axios.post(query , formData)
    return await res
}

export async function ApiDelete(id) {
    let query = gConsts.API_ROOT + `secured/genres/delete/${id}`
    const res = await axios.delete(query)
    return await res
}

export async function ApiUpdate(formData, id) {
    let query = gConsts.API_ROOT +   `secured/genres/update/${id}`
    const res = await axios.put(query , formData)
    return await res
}