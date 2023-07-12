import {
    GET_ALL_ORDERS,
    GET_ORDER,
    CREATE_ORDER,
    UPDATE_TO_Paid,
    UPDATE_TO_DELIVER,
    OG_ERROR,
    OG1_ERROR,
    OC_ERROR,
    OETP_ERROR,
    OETD_ERROR, GET_CHECKOUT_SESSION, OGCS_ERROR, DElETE_ORDER, OD_ERROR,
} from "../Types";
import {use_delete_data, use_get_data, use_post_data, use_put_data} from "../../Hooks/ApiDataHook";

const url = "/orders"
const token = localStorage.getItem('token') || "";

/**
 * @method GET
 * @return data object
 * @static true
 */
export const getOrdersAction = () => async (dispatch) => {
    try {
        const response = await use_get_data(url, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: GET_ALL_ORDERS, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: OG_ERROR, payload: error.response});
    }
}
/**
 * @method GET
 * @return data object
 * @static true
 */
export const getOrderAction = (id) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}/${id}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: GET_ORDER, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: OG1_ERROR, payload: error.response});
    }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const createOrderAction = ({cartId,formData}) => async (dispatch) => {
    try {
        const response = await use_post_data(`${url}/${cartId}`, formData,{
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: CREATE_ORDER, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: OC_ERROR, payload: error.response});
    }
};
/**
 * @method PUT
 * @return data object
 * @static true
 */
export const updateOrderToPaidAction = (id) => async (dispatch) => {
    try {
        const response = await use_put_data(`${url}/${id}/pay`, undefined,{
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: UPDATE_TO_Paid, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: OETP_ERROR, payload: error.response});
    }
};
/**
 * @method PUT
 * @return data object
 * @static true
 */
export const updateOrderToDeliverAction = (id) => async (dispatch) => {
    try {
        const response = await use_put_data(`${url}/${id}/delivered`,undefined, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: UPDATE_TO_DELIVER, payload: response, loading: true});
    } catch (error) {
        console.log(error.response);
        dispatch({type: OETD_ERROR, payload: error.response});
    }
};
/**
 * @method GET
 * @return data object
 * @static true
 */
export const getOrderCheckoutSessionAction = (cartId) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}/checkout-session/${cartId}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: GET_CHECKOUT_SESSION, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: OGCS_ERROR, payload: error.response});
    }
};
/**
 * @method DELETE
 * @return data object
 * @static true
 */
export const destroyOrderAction = (id) => async (dispatch) => {
    try {
        const response = await use_delete_data(`${url}/${id}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: DElETE_ORDER, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: OD_ERROR, payload: error.response});
    }
};