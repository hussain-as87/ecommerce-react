import {
    AUTH_FORGET_PASSWORD,
    AUTH_LOGIN,
    AUTH_REST_PASSWORD,
    AUTH_SIGNUP,
    AUTH_VERiFY_REST_PASSWORD,
    AS_ERROR,
    AL_ERROR,
    AF_ERROR,
    AV_ERROR,
    AR_ERROR,
} from "../Types";

const initialState = {
    signup: [],
    login: [],
    forgetPassword: [],
    verifyRestPassword: [],
    restPassword: [],
    signup_error: [],
    login_error: [],
    forgetPassword_error: [],
    verifyRestPassword_error: [],
    restPassword_error: [],
    loading: true,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SIGNUP:
            return { ...state, signup: action.payload, loading: false };
        case AUTH_LOGIN:
            return { ...state, login: action.payload, loading: false };
        case AUTH_FORGET_PASSWORD:
            return { ...state, forgetPassword: action.payload, loading: false };
        case AUTH_VERiFY_REST_PASSWORD:
            return { ...state, verifyRestPassword: action.payload, loading: false };
        case AUTH_REST_PASSWORD:
            return { ...state, restPassword: action.payload, loading: false };
        case AS_ERROR:
            return { ...state, signup_error: action.payload, loading: false };
        case AL_ERROR:
            return { ...state, login_error: action.payload, loading: false };
        case AF_ERROR:
            return { ...state, forgetPassword_error: action.payload, loading: false };
        case AV_ERROR:
            return { ...state, verifyRestPassword_error: action.payload, loading: false };
        case AR_ERROR:
            return { ...state, restPassword_error: action.payload, loading: false };
        default:
            return state;
    }
};

export default AuthReducer;
