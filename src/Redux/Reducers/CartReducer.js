import {
    APPlY_COUPON_CART,
    CAAC_ERROR, CAC_ERROR,
    CACL_ERROR, CAD_ERROR, CAE_ERROR, CAG_ERROR, CLEAR_CART,
    CREATE_CART, DELETE_CART, EDIT_CART,
    GET_ALL_CARTS
} from "../Types";

const initialState = {
    carts: [],
    applyCoupon: [],
    create: [],
    edit: [],
    delete: [],
    clear: [],
    carts_error: [],
    applyCoupon_error: [],
    create_error: [],
    edit_error: [],
    delete_error: [],
    clear_error: [],
    loading: true,
};
const ReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CARTS:
            return {...state, carts: action.payload, loading: false};
        case APPlY_COUPON_CART:
            return {...state, applyCoupon: action.payload, loading: false};
        case CREATE_CART:
            return {...state, create: action.payload, loading: false};
        case EDIT_CART:
            return {...state, edit: action.payload, loading: false};
        case DELETE_CART:
            return {...state, delete: action.payload, loading: false};
        case CLEAR_CART:
            return {...state, clear: action.payload, loading: false};
        case CAG_ERROR:
            return {...state, carts_error: action.payload, loading: false};
        case CAAC_ERROR:
            return {...state, applyCoupon_error: action.payload, loading: false};
        case CAC_ERROR:
            return {...state, create_error: action.payload, loading: false};
        case CAE_ERROR:
            return {...state, edit_error: action.payload, loading: false};
        case CAD_ERROR:
            return {...state, delete_error: action.payload, loading: false};
        case CACL_ERROR:
            return {...state, clear_error: action.payload, loading: false};
        default:
            return state;
    }
};

export default ReviewReducer;
