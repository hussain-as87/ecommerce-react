import { GET_ALL_USERS, GET_LOGGED_USER, CHANGE_USER_PASSWORD, UG_ERROR, LUG_ERROR, UCP_ERROR} from "../Types";

const initialState = {
    user: [],
    users: [],
    changePassword: [],
    user_error: [],
    users_error: [],
    changePassword_error: [],
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
        case LUG_ERROR:
            return {...state, user_error: action.payload, loading: false};
        case UG_ERROR:
            return {...state, users_error: action.payload, loading: false};
        case UCP_ERROR:
            return {...state, changePassword_error: action.payload, loading: false};
        default:
            return state;
    }
};

export default AuthReducer;
