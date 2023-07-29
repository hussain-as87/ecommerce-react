import {use_post_data, use_get_data, use_put_data, use_delete_data} from "../../Hooks/ApiDataHook";
import {
    CREATE_SUBCATEGORY,
    SC_ERROR,
    GET_SUBCATEGORY,
    SG_ERROR,
    EDIT_SUBCATEGORY,
    SE_ERROR,
    DELETE_SUBCATEGORY,
    SD_ERROR,
    GET_ALL_SUBCATEGORIES,
    SGO_ERROR,
    GET_SUBCATEGORY_BY_CATEGORY, SGBC_ERROR
} from "../Types";

const url = "/subcategories";
const token = localStorage.getItem('token') || "";


/**
 * @method GET
 * @return data object
 * @static true
 */
export const getSubcategoriesAction = ({limit, page}) => async (dispatch) => {
    try {
        const response = await use_get_data(url + `?limit=${limit}&page=${page}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: GET_ALL_SUBCATEGORIES, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: SG_ERROR, payload: error});
    }
};
/**
 * @method GET
 * @return data object
 * @static true
 */
export const getSubcategoryAction = (id) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}/${id}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: GET_SUBCATEGORY, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: SGO_ERROR, payload: error});
    }
};
/**
 * @method GET
 * @return data object
 * @static true
 */
export const getSubcategoryByCategoryAction = (category) => async (dispatch) => {
    try {
        const response = await use_get_data(`/categories/6471f64f3d3e6475ec757544/subcategories`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: GET_SUBCATEGORY_BY_CATEGORY, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: SGBC_ERROR, payload: error.response});
    }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const createSubcategoryAction = (formData) => async (dispatch) => {
    try {
        const response = await use_post_data(url, formData, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: CREATE_SUBCATEGORY, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: SC_ERROR, payload: error.response});
    }
};
/**
 * @method PUT
 * @return data object
 * @static true
 */
export const editSubcategoryAction = (id, formData) => async (dispatch) => {
    try {
        const response = await use_put_data(`${url}/${id}`, formData, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: EDIT_SUBCATEGORY, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: SE_ERROR, payload: error.response});
    }
};
/**
 * @method DELETE
 * @return data object
 * @static true
 */
export const destroySubcategoryAction = (id) => async (dispatch) => {
    try {
        const response = await use_delete_data(`${url}/${id}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: DELETE_SUBCATEGORY, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: SD_ERROR, payload: error.response});
    }
};
