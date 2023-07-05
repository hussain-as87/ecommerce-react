import {use_post_data, use_delete_data, use_get_data, use_put_data} from "../../Hooks/ApiDataHook";
import {
    GET_ALL_PRODUCTS,
    CREATE_PRODUCT,
    GET_PRODUCT,
    GET_PRODUCTS_BY_CATEGORY,
    GET_PRODUCTS_BY_SOLD,
    DELETE_PRODUCT,
    EDIT_PRODUCT,
    PGS_ERROR,
    PG_ERROR,
    PD_ERROR,
    PGC_ERROR,
    PG1_ERROR,
    PC_ERROR,
    PE_ERROR
} from "../Types";

const url = "/products";
const token = localStorage.getItem('token') || "";

/**
 * @method GET
 * @return data object
 * @static true
 */
export const getProducts = ({limit, page, sort, search, keyword}) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}?limit=${limit}&page=${page}&keyword=${keyword || ''}&sort=${sort}&${search}`);
        dispatch({type: GET_ALL_PRODUCTS, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: PG_ERROR, payload: error});
    }
};
/**
 * @method GET
 * @return data object
 * @static true
 */
export const getProductsBySold = ({limit, page}) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}?limit=${limit}&page=${page}&sort=-sold`);
        dispatch({type: GET_PRODUCTS_BY_SOLD, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: PGS_ERROR, payload: error});
    }
};
/**
 * @method DELETE
 * @return data object
 * @static true
 */
export const destroyProduct = (id) => async (dispatch) => {
    try {
        const response = await use_delete_data(`${url}/${id}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: DELETE_PRODUCT, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: PD_ERROR, payload: error});
    }
};
/**
 * @method GET
 * @return data object
 * @static true
 */
export const getProductsByCategory = (catId) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}?limit=4&page=1&sort=-createdAt&category.name=${catId}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: GET_PRODUCTS_BY_CATEGORY, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: PGC_ERROR, payload: error});
    }
};
/**
 * @method GET
 * @return data object
 * @static true
 */
export const getProduct = (id) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}/${id}`);
        dispatch({type: GET_PRODUCT, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: PG1_ERROR, payload: error});
    }
};

/**
 * @method POST
 * @return data object
 * @static true
 */
export const createProduct = (formData) => async (dispatch) => {
    try {
        const response = await use_post_data(url, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            },
        });
        console.log(response.data)
        dispatch({type: CREATE_PRODUCT, payload: response, loading: true});
    } catch (error) {
        dispatch({type: PC_ERROR, payload: error.response});
        console.log(error);
    }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const updateProduct = ({id, formData}) => async (dispatch) => {
    try {
        const response = await use_put_data(`${url}/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            },
        });
        console.log(response.data)
        dispatch({type: EDIT_PRODUCT, payload: response, loadingE: true});
    } catch (error) {
        dispatch({type: PE_ERROR, payload: error.response});
        console.log(error);
    }
};
