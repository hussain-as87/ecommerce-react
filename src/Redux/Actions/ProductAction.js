import {use_create_data, use_destroy_data, use_index_data, use_update_data} from "../../Hooks/ApiDataHook";
import {
    ERROR,
    GET_ALL_PRODUCTS,
    CREATE_PRODUCT,
    GET_PRODUCT,
    GET_PRODUCTS_BY_CATEGORY,
    GET_PRODUCTS_BY_SOLD, DELETE_PRODUCT, EDIT_PRODUCT
} from "../Types";

const url = "/products";
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzNiYjMzOWMyMjA4YzcxNWE5NTBkNmMiLCJpYXQiOjE2ODYwMzg1OTcsImV4cCI6MTY5MzgxNDU5N30.EiXvpt92eRmmfPeXgIR7haGNJpdjTmESUyjKg5l0slw";

/**
 * @method GET
 * @return data object
 * @static true
 */
export const getProducts = ({limit, page, sort, search}) => async (dispatch) => {
    try {
        const response = await use_index_data( `${url}?limit=${limit}&page=${page}&sort=${sort}&${search}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: GET_ALL_PRODUCTS, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: ERROR, payload: error});
    }
};
/**
 * @method GET
 * @return data object
 * @static true
 */
export const getProductsBySold = ({limit, page}) => async (dispatch) => {
    try {
        const response = await use_index_data( `${url}?limit=${limit}&page=${page}&sort=-sold`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: GET_PRODUCTS_BY_SOLD, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: ERROR, payload: error});
    }
};
/**
 * @method DELETE
 * @return data object
 * @static true
 */
export const destroyProduct = (id) => async (dispatch) => {
    try {
        const response = await use_destroy_data( `${url}/${id}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: DELETE_PRODUCT, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: ERROR, payload: error});
    }
};
/**
 * @method GET
 * @return data object
 * @static true
 */
export const getProductsByCategory = (catId) => async (dispatch) => {
    try {
        const response = await use_index_data( `${url}?limit=4&page=1&sort=-createdAt&category.name=${catId}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: GET_PRODUCTS_BY_CATEGORY, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: ERROR, payload: error});
    }
};
/**
 * @method GET
 * @return data object
 * @static true
 */
export const getProduct = (id) => async (dispatch) => {
    try {
        const response = await use_index_data(url + `/${id}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: GET_PRODUCT, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: ERROR, payload: error});
    }
};

/**
 * @method POST
 * @return data object
 * @static true
 */
export const createProduct = (formData) => async (dispatch) => {
    try {
        const response = await use_create_data(url, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            },
        });
        console.log(response.data)
        dispatch({type: CREATE_PRODUCT, payload: response, loading: true});
    } catch (error) {
        dispatch({type: ERROR, payload: error.response});
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
        const response = await use_update_data(`${url}/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            },
        });
        console.log(response.data)
        dispatch({type: EDIT_PRODUCT, payload: response, loadingE: true});
    } catch (error) {
        dispatch({type: ERROR, payload: error.response});
        console.log(error);
    }
};
