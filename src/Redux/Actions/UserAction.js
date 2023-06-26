import {use_get_data, use_put_data} from "../../Hooks/ApiDataHook";
import {CHANGE_USER_PASSWORD, GET_LOGGED_USER, UCP_ERROR, UG_ERROR} from "../Types";

const url = "/users";
const token = localStorage.getItem('token') || "";

/**
 * @method GET
 * @return data object
 * @static true
 */
export const getLoggedUserAction = () => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}/get`, {headers: {Authorization: `Bearer ${token}`}});
        dispatch({type: GET_LOGGED_USER, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: UG_ERROR, payload: error});
    }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const ChangeUserPasswordAction = ({id,formData}) => async (dispatch) => {
    try {
        const response = await use_put_data(`${url}/changePassword/${id}`, formData,{headers: {Authorization: `Bearer ${token}`}});
        dispatch({type: CHANGE_USER_PASSWORD, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: UCP_ERROR, payload: error});
    }
};



