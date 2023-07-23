import {use_delete_data, use_get_data, use_post_data, use_put_data} from "../../Hooks/ApiDataHook";
import {
    CREATE_COUPON,
    EDIT_COUPON,
    DELETE_COUPON, GET_COUPON, GET_ALL_COUPONS, COG_ERROR, COG1_ERROR, COC_ERROR, COE_ERROR, COD_ERROR
} from "../Types";

const url = "/coupons"
const token = localStorage.getItem('token') || "";

/**
 * @method GET
 * @return data object
 * @static true
 */
export const getCouponsAction = ({limit,page}) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}?limit=${limit||2}&page=${page||1}&sort=-updatedAt`,{
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: GET_ALL_COUPONS, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: COG_ERROR, payload: error});
    }
};
/**
 * @method GET
 * @return data object
 * @static true
 */
export const getCouponByNameAction = (name) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}?name=${name}`,{
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: GET_ALL_COUPONS, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: COG_ERROR, payload: error});
    }
};
/**
 * @method GET
 * @return data object
 * @static true
 */
export const getCouponAction = (id) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}/${id}`,{
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: GET_COUPON, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: COG1_ERROR, payload: error});
    }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const createCouponAction = (formData) => async (dispatch) => {
    try {
        const response = await use_post_data(url, formData, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: CREATE_COUPON, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: COC_ERROR, payload: error.response});
    }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const editCouponAction = ({id, formData}) => async (dispatch) => {
    try {
        const response = await use_put_data(`${url}/${id}`, formData, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: EDIT_COUPON, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: COE_ERROR, payload: error.response});
    }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const destroyCouponAction = (id) => async (dispatch) => {
    try {
        const response = await use_delete_data(`${url}/${id}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: DELETE_COUPON, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: COD_ERROR, payload: error.response});
    }
};
