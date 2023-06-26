import {use_post_data, use_put_data} from "../../Hooks/ApiDataHook";
import {
    AUTH_SIGNUP,
    AUTH_LOGIN,
    AUTH_FORGET_PASSWORD,
    AUTH_VERiFY_REST_PASSWORD,
    AUTH_REST_PASSWORD, AS_ERROR, AL_ERROR, AF_ERROR, AV_ERROR, AR_ERROR
} from "../Types";

const url = "/auth";

/**
 * @description  signup
 * @route   POST /api/v1/auth/signup
 * @access  Public
 */
export const signupAction = (formData) => async (dispatch) => {
    try {
        const response = await use_post_data(`${url}/signup`, formData);
        dispatch({type: AUTH_SIGNUP, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: AS_ERROR, payload: error});
    }
};
/**
 * @description  login
 * @route   POST /api/v1/auth/login
 * @access  Public
 */
export const loginAction = (formData) => async (dispatch) => {
    try {
        const response = await use_post_data(`${url}/login`, formData);
        dispatch({type: AUTH_LOGIN, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: AL_ERROR, payload: error});
    }
};

/**
 * @description  forget password
 * @route   POST /api/v1/auth/forgotPassword
 * @access  Public
 */
export const forgetPasswordAction = (formData) => async (dispatch) => {
    try {
        const response = await use_post_data(`${url}/forgotPassword`, formData);
        dispatch({type: AUTH_FORGET_PASSWORD, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: AF_ERROR, payload: error});
    }
};
/**
 * @description  verify the reset code
 * @route   POST /api/v1/auth/verifyPasswordResetCode
 * @access  Public
 */
export const verifyRestPasswordAction = (formData) => async (dispatch) => {
    try {
        const response = await use_post_data(`${url}/verifyPasswordResetCode`, formData);
        dispatch({type: AUTH_VERiFY_REST_PASSWORD, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: AV_ERROR, payload: error});
    }
};
/**
 * @description  reset the password
 * @route   POST /api/v1/auth/resetPassword
 * @access  Public
 */
export const restPasswordAction = (formData) => async (dispatch) => {
    try {
        const response = await use_put_data(`${url}/resetPassword`, formData);
        dispatch({type: AUTH_REST_PASSWORD, payload: response});
    } catch (error) {
        console.log(error);
        dispatch({type: AR_ERROR, payload: error});
    }
};


