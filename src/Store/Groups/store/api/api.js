//calling the  api
import axios from "axios";
import * as gConsts from "../../../../Constants/constants";
import {GroupsLimit} from "../../../../Constants/constants";


//NQ
export async function ApiGetMany(pageNo) {
    let query = gConsts.API_ROOT + `groups/?limit=${GroupsLimit}&offset=${pageNo}`
    const res = await fetch(query);
    let a = await res.json()
    console.log("grp=======>", a)
    return await a
    // const a=  delayGroup(100)
    // console.log("grpps=======", a.then(res=> res))
    // return await a
}

export async function ApiGetSingle(id) {

    let query = gConsts.API_ROOT + `groups/one/${id}`

    const res = await fetch(query);
    return await res.json()
}
export async function ApiCreate(formData) {

    let query = gConsts.API_ROOT + 'secured/groups/'
    const res = await axios.post(query , formData)
    return await res
}

export async function ApiDelete(id) {
    let query = gConsts.API_ROOT + `secured/groups/delete/${id}`
    const res = await axios.delete(query)
    return await res
}

export async function ApiUpdate(formData, id) {
    let query = gConsts.API_ROOT +   `secured/groups/update/${id}`
    const res = await axios.put(query , formData)
    return await res
}