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
    OETD_ERROR, GET_CHECKOUT_SESSION, OGCS_ERROR,
} from "../Types";
import {use_get_data, use_post_data, use_put_data} from "../../Hooks/ApiDataHook";
import {GetOrderCheckoutSession} from "../../Controllers/OrderController";

const url = "/orders"
const token = localStorage.getItem('token') || "";
/*
orders
order
create
updateToPaid
updateToDeliver
*/


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
export const createOrderAction = (id) => async (dispatch) => {
    try {
        const response = await use_post_data(`${url}/${id}`, {
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
        const response = await use_put_data(`${url}/${id}/pay`, {
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
        const response = await use_put_data(`${url}/${id}/deliver`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: UPDATE_TO_DELIVER, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: OETD_ERROR, payload: error.response});
    }
};
/**
 * @method GET
 * @return data object
 * @static true
 */
export const getOrderCheckoutSessionAction = (id) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}/checkout-session/${id}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: GET_CHECKOUT_SESSION, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: OGCS_ERROR, payload: error.response});
    }
};