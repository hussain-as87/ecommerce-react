import {use_delete_data, use_get_data, use_post_data, use_put_data} from "../../Hooks/ApiDataHook";
import {
    BNC_ERROR,
    BND_ERROR,
    BNE_ERROR, BNG1_ERROR,
    BNG_ERROR,
    CREATE_BANNER,
    DELETE_BANNER,
    EDIT_BANNER,
    GET_ALL_BANNERS,
    GET_BANNER
} from "../Types";

const url = "/banners";
const token = localStorage.getItem('token') || "";

/**
 * @method GET
 * @return data object
 * @static true
 */
export const getBannersAction = ({limit, page}) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}?limit=${limit}&page=${page}`);
        dispatch({type: GET_ALL_BANNERS, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: BNG_ERROR, payload: error.response});
    }
};
/**
 * @method GET
 * @return data object
 * @static true
 */
export const getBannerAction = (id) => async (dispatch) => {
    try {
        const response = await use_get_data(`${url}/${id}`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        dispatch({type: GET_BANNER, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: BNG1_ERROR, payload: error.response});
    }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const createBannerAction = (formData) => async (dispatch) => {
    try {
        const response = await use_post_data(url, formData, {
            headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"},
        });
        dispatch({type: CREATE_BANNER, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: BNC_ERROR, payload: error.response});
    }
};
/**
 * @method PUT
 * @return data object
 * @static true
 */
export const editBannerAction = (id, formData) => async (dispatch) => {
    try {
        const response = await use_put_data(`${url}/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            },
        });
        dispatch({type: EDIT_BANNER, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: BNE_ERROR, payload: error.response});
    }
};

/**
 * @method DELETE
 * @return data object
 * @static true
 */
export const destroyBannerAction = (id) => async (dispatch) => {
    try {
        const response = await use_delete_data(`${url}/${id}`, {
            headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"},
        });
        dispatch({type: DELETE_BANNER, payload: response, loading: true});
    } catch (error) {
        console.log(error);
        dispatch({type: BND_ERROR, payload: error.response});
    }
};


