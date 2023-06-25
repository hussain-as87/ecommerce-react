import {
    AUTH_FORGET_PASSWORD,
    AUTH_LOGIN,
    AUTH_REST_PASSWORD,
    AUTH_SIGNUP,
    AUTH_VERiFY_REST_PASSWORD,
    ERROR
} from "../Types";

const initialState = {
    signup: [],
    login: [],
    forgetPassword: [],
    verifyRestPassword: [],
    restPassword: [],
    error: [],
    loading: true,
};
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SIGNUP:
            return {...state, signup: action.payload, loading: false};
        case AUTH_LOGIN:
            return {...state, login: action.payload, loading: false};
        case AUTH_FORGET_PASSWORD:
            return {...state, forgetPassword: action.payload, loading: false};
        case AUTH_VERiFY_REST_PASSWORD:
            return {...state, verifyRestPassword: action.payload, loading: false};
        case AUTH_REST_PASSWORD:
            return {...state, restPassword: action.payload, loading: false};
        case ERROR:
            return {...state, error: action.payload, loading: true};
        default:
            return state;
    }
};

export default AuthReducer;
