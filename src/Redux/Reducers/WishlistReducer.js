import {
    ERROR, LOGGED_USER_WISHLIST, WISHLIST
} from "../Types";

const initialState = {
    wishlist: [],
    loggedUserWishlist: [],
    error: [],
    loading: true,
};
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case WISHLIST:
            return {...state, wishlist: action.payload, loading: false};
        case LOGGED_USER_WISHLIST:
            return {...state, loggedUserWishlist: action.payload, loading: false};
        case ERROR:
            return {...state, error: action.payload, loading: true};
        default:
            return state;
    }
};

export default AuthReducer;
