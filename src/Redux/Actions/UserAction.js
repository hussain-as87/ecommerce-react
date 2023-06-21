import {use_get_data} from "../../Hooks/ApiDataHook";
import {ERROR,  GET_LOGGED_USER} from "../Types";

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
        dispatch({type: ERROR, payload: error});
    }
};



