import BaseURL from "../API/BaseURL"

export const use_index_data = async (url, params) => {
    try {
        const response = await BaseURL.get(url, params)
        return response.data
    } catch (error) {
        throw error;
    }
}
export const use_create_data = async (url, formData, params) => {
    try {
        return await BaseURL.post(url, formData, params);
    } catch (error) {
        throw error;
    }
}