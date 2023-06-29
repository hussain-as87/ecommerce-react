import {use_delete_data, use_get_data, use_post_data, use_put_data} from "../../Hooks/ApiDataHook";
import {
    GET_ALL_REVIEWS,
    CREATE_REVIEW,
    RG_ERROR,
    RC_ERROR,
    EDIT_REVIEW,
    RE_ERROR,
    RD_ERROR,
    DELETE_REVIEW, GET_REVIEW, RG1_ERROR
} from "../Types";

const url = "/reviews"
const token = localStorage.getItem('token') || "";

/**
 * @method GET
 * @return data object
 * @static true
 */
export const getReviewsAction = (productId) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}?product=${productId}`);
        dispatch({type: GET_ALL_REVIEWS, payload: response, rg_loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: RG_ERROR, payload: error});
    }
};
/**
 * @method GET
 * @return data object
 * @static true
 */
export const getReviewAction = (id) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}/${id}`);
        dispatch({type: GET_REVIEW, payload: response, rg1_loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: RG1_ERROR, payload: error});
    }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const createReviewAction = ({id, formData}) => async (dispatch) => {
    try {
        const response = await use_post_data(`/products/${id}/reviews`, formData, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: CREATE_REVIEW, payload: response, rc_loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: RC_ERROR, payload: error.response});
    }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const editReviewAction = ({id, formData}) => async (dispatch) => {
    try {
        const response = await use_put_data(`${url}/${id}/`, formData, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: EDIT_REVIEW, payload: response, re_loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: RE_ERROR, payload: error.response});
    }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const destroyReviewAction = (id) => async (dispatch) => {
    try {
        const response = await use_delete_data(`${url}/${id}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        dispatch({type: DELETE_REVIEW, payload: response, rd_loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: RD_ERROR, payload: error.response});
    }
};
