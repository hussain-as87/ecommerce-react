import {use_delete_data, use_get_data, use_post_data, use_put_data} from "../../Hooks/ApiDataHook";
import {
    GET_ALL_BRANDS,
    CREATE_BRAND,
    BC_ERROR,
    BG_ERROR,
    BE_ERROR,
    EDIT_BRAND,
    DELETE_BRAND,
    BD_ERROR,
    GET_BRAND, BG1_ERROR
} from "../Types";

const url = "/brands";
const token = localStorage.getItem('token') || "";

/**
 * @method GET
 * @return data object
 * @static true
 */
export const getBrandsAction = ({limit, page}) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}?limit=${limit}&page=${page}`);
        dispatch({type: GET_ALL_BRANDS, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: BG_ERROR, payload: error.response});
    }
};
/**
 * @method GET
 * @return data object
 * @static true
 */
export const getBrandAction = (id) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}/${id}`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        dispatch({type: GET_BRAND, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: BG1_ERROR, payload: error.response});
    }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const createBrandAction = (formData) => async (dispatch) => {
    try {
        const response = await use_post_data(url, formData, {
            headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"},
        });
        dispatch({type: CREATE_BRAND, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: BC_ERROR, payload: error.response});
    }
};
/**
 * @method PUT
 * @return data object
 * @static true
 */
export const editBrandAction = (id, formData) => async (dispatch) => {
    try {
        const response = await use_put_data(`${url}/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            },
        });
        dispatch({type: EDIT_BRAND, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: BE_ERROR, payload: error.response});
    }
};

/**
 * @method DELETE
 * @return data object
 * @static true
 */
export const destroyBrandAction = (id) => async (dispatch) => {
    try {
        const response = await use_delete_data(`${url}/${id}`, {
            headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"},
        });
        dispatch({type: DELETE_BRAND, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: BD_ERROR, payload: error.response});
    }
};


