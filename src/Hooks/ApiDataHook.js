import baseURL from "../API/BaseURL"

export const use_get_data = async (url, params) => {
    try {
        const response = await baseURL.get(url, params)
        return response.data
    } catch (error) {
        throw error;
    }
}
export const use_post_data = async (url, formData, params) => {
    try {
        return await baseURL.post(url, formData, params);
    } catch (error) {
        throw error;
    }
}
export const use_put_data = async (url, formData, params) => {
    try {
        return await baseURL.put(url, formData, params);
    } catch (error) {
        throw error;
    }
}
export const use_delete_data = async (url, params) => {
    try {
        return await baseURL.delete(url, params);
    } catch (error) {
        throw error;
    }
}