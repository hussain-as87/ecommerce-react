import {use_post_data, use_get_data} from "../../Hooks/ApiDataHook";
import {CREATE_CATEGORY, GET_ALL_CATEGORIES, CG_ERROR, CC_ERROR} from "../Types";

const url = "/categories";
const token = localStorage.getItem('token') || "";

/**
 * @method GET
 * @return data object
 * @static true
 */
export const getCategories = (limit, page) => async (dispatch) => {
    try {
        const response = await use_get_data(url + `?limit=${limit}&page=${page}`);
        dispatch({type: GET_ALL_CATEGORIES, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: CG_ERROR, payload: error});
    }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const createCategory = (formData) => async (dispatch) => {
    try {
        const response = await use_post_data(url, formData, {
            headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"},
        });
        dispatch({type: CREATE_CATEGORY, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: CC_ERROR, payload: error.response});
    }
};
