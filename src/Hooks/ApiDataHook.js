import BaseURL from "../API/BaseURL"

export const indexData = async(url,params)=>{
    const response = await BaseURL.get(url,params);
    return response.data
}