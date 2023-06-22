import {ERROR, GET_ALL_USERS, GET_LOGGED_USER, CHANGE_USER_PASSWORD} from "../Types";

const initialState = {
    user: [],
    users: [],
    changePassword: [],
    error: [],
    loading: true,
};
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGGED_USER:
            return {...state, user: action.payload, loading: false};
        case GET_ALL_USERS:
            return {...state, users: action.payload, loading: false};
        case CHANGE_USER_PASSWORD:
            return {...state, changePassword: action.payload, loading: false};
        case ERROR:
            return {...state, error: action.payload, loading: true};
        default:
            return state;
    }
};

export default AuthReducer;
