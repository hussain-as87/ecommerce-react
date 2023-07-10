import {use_delete_data, use_get_data, use_post_data, use_put_data} from "../../Hooks/ApiDataHook";
import {
    CREATE_CART,
    CAC_ERROR,
    EDIT_CART,
    CAE_ERROR,
    CAD_ERROR,
    DELETE_CART, APPlY_COUPON_CART, CAAC_ERROR, GET_ALL_CARTS, CAG_ERROR, CLEAR_CART, CACL_ERROR
} from "../Types";

const url = "/cart"
const token = localStorage.getItem('token') || "";

/**
 * @method GET
 * @return data object
 * @static true
 */
export const getCartItemsAction = ({limit, page}) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}?limit=${limit}&page=${page}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: GET_ALL_CARTS, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: CAG_ERROR, payload: error});
    }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const applyCouponOnCartAction = (formData) => async (dispatch) => {
    try {
        const response = await use_post_data(`${url}/applyCoupon`, formData, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: APPlY_COUPON_CART, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: CAAC_ERROR, payload: error});
    }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const createCartItemAction = (formData) => async (dispatch) => {
    try {
        const response = await use_post_data(url, formData, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: CREATE_CART, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: CAC_ERROR, payload: error.response});
    }
};
/**
 * @method PUT
 * @return data object
 * @static true
 */
export const editCartItemAction = ({id, formData}) => async (dispatch) => {
    try {
        const response = await use_put_data(`${url}/${id}/`, formData, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: EDIT_CART, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: CAE_ERROR, payload: error.response});
    }
};
/**
 * @method DELETE
 * @return data object
 * @static true
 */
export const destroyCartItemAction = (id) => async (dispatch) => {
    try {
        const response = await use_delete_data(`${url}/${id}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: DELETE_CART, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: CAD_ERROR, payload: error.response});
    }
};
/**
 * @method DELETE
 * @return data object
 * @static true
 */
export const clearCartItemsAction = () => async (dispatch) => {
    try {
        const response = await use_delete_data(url, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: CLEAR_CART, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: CACL_ERROR, payload: error.response});
    }
};
