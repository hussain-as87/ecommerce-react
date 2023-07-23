import {use_post_data, use_get_data, use_put_data, use_delete_data} from "../../Hooks/ApiDataHook";
import {
    CREATE_CATEGORY,
    GET_ALL_CATEGORIES,
    CG_ERROR,
    CC_ERROR,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    CE_ERROR, CD_ERROR, GET_CATEGORY, CG1_ERROR
} from "../Types";

const url = "/categories";
const token = localStorage.getItem('token') || "";

/**
 * @method GET
 * @return data object
 * @static true
 */
export const getCategoriesAction = ({limit, page}) => async (dispatch) => {
    try {
        const response = await use_get_data(url + `?limit=${limit}&page=${page}`);
        dispatch({type: GET_ALL_CATEGORIES, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: CG_ERROR, payload: error.response});
    }
};
/**
 * @method GET
 * @return data object
 * @static true
 */
export const getCategoryAction = (id) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}/${id}`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        dispatch({type: GET_CATEGORY, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: CG1_ERROR, payload: error.response});
    }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const createCategoryAction = (formData) => async (dispatch) => {
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
/**
 * @method PUT
 * @return data object
 * @static true
 */
export const editCategoryAction = (id, formData) => async (dispatch) => {
    try {
        const response = await use_put_data(`${url}/${id}`, formData, {
            headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"},
        });
        dispatch({type: EDIT_CATEGORY, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: CE_ERROR, payload: error.response});
    }
};
/**
 * @method DELETE
 * @return data object
 * @static true
 */
export const destroyCategoryAction = (id) => async (dispatch) => {
    try {
        const response = await use_delete_data(`${url}/${id}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: DELETE_CATEGORY, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: CD_ERROR, payload: error.response});
    }
};
