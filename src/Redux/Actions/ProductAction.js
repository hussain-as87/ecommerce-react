import {use_create_data, use_index_data} from "../../Hooks/ApiDataHook";
import {ERROR, GET_ALL_PRODUCTS, CREATE_PRODUCT} from "../Types";

const url = "/products";
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzNiYjMzOWMyMjA4YzcxNWE5NTBkNmMiLCJpYXQiOjE2ODUxODc4MDcsImV4cCI6MTY5Mjk2MzgwN30.bIrENgn6nM0z2VJgpKTJgwjmkXWT6n0MwlSzOd_QZ9c";

/**
 * @method GET
 * @return data object
 * @static true
 */
export const getProducts = (limit, page) => async (dispatch) => {
    try {
        const response = await use_index_data(url + `?limit=${limit}&page=${page}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: GET_ALL_PRODUCTS, payload: response});
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
