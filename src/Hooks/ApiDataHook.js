import BaseURL from "../API/BaseURL"

export const use_index_data = async (url, params) => {
    const response = await BaseURL.get(url, params)
    return response.data
}
export const use_create_data = async (url, formData, params) => {
    const response = await BaseURL.post(url, formData, params)
    return response
}