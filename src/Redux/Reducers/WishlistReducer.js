import {
     LOGGED_USER_WISHLIST, W_ERROR, WISHLIST, WLU_ERROR
} from "../Types";

const initialState = {
    wishlist: [],
    loggedUserWishlist: [],
    wishlist_error: [],
    loggedUserWishlist_error: [],
    loading: true,
};
const WishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case WISHLIST:
            return {...state, wishlist: action.payload, loading: false};
        case LOGGED_USER_WISHLIST:
            return {...state, loggedUserWishlist: action.payload, loading: false};
        case W_ERROR:
            return {...state, wishlist_error: action.payload, loading: true};
        case WLU_ERROR:
            return {...state, loggedUserWishlist_error: action.payload, loading: true};
        default:
            return state;
    }
};

export default WishlistReducer;
