import BaseURL from "../API/BaseURL"

export const indexData = async(url,params)=>{
    return await BaseURL.get(url,params)
}