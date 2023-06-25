import { ERROR, LOGGED_USER_WISHLIST, WISHLIST} from "../Types";
import {use_delete_data, use_get_data, use_post_data} from "../../Hooks/ApiDataHook";

const url = "/wishlist";
const token = localStorage.getItem('token') || "";

export const addProductToWishlistAction =  (formData) => async (dispatch) => {
    try {
        const response =await use_post_data(url, formData,{
            headers: { Authorization: `Bearer ${token}` },
        });
        dispatch({ type: WISHLIST, payload: response ,loading:true});
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR, payload: error.response });
    }
};
export const removeProductToWishlistAction = (id) => async (dispatch) => {
    try {
        const response = await use_delete_data(`${url}/${id}`, {
            headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"},
        });
        dispatch({type: WISHLIST, payload: response, loading: true});
    } catch (error) {
        console.log(error)
        dispatch({type: ERROR, payload: error});
    }
}
export const loggedUserWishlistAction = () => async (dispatch) => {
    try {
        const response = await use_get_data(url, {
            headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"},
        });
        dispatch({type: LOGGED_USER_WISHLIST, payload: response, loading: true});
    } catch (error) {
        console.log(error)
        dispatch({type: ERROR, payload: error});
    }
}