import {
    CREATE_COUPON, DELETE_COUPON, EDIT_COUPON,
    GET_ALL_COUPONS, GET_COUPON,
    COC_ERROR, COD_ERROR, COE_ERROR, COG1_ERROR, COG_ERROR, GET_COUPON_BY_NAME, CBN_ERROR
} from "../Types";

const initialState = {
    coupons: [],
    couponByName: [],
    coupon: [],
    create: [],
    edit: [],
    delete: [],
    coupons_error: [],
    couponByName_error: [],
    coupon_error: [],
    edit_error: [],
    create_error: [],
    delete_error: [],
    loading: true,
};
const CouponReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUPONS:
            return {...state, coupons: action.payload, loading: false};
        case GET_COUPON:
            return {...state, coupon: action.payload, loading: false};
        case GET_COUPON_BY_NAME:
            return {...state, couponByName: action.payload, loading: false};
        case CREATE_COUPON:
            return {...state, create: action.payload, loading: false};
        case EDIT_COUPON:
            return {...state, edit: action.payload, loading: false};
        case DELETE_COUPON:
            return {...state, delete: action.payload, loading: false};
        case COG_ERROR:
            return {...state, coupons_error: action.payload, loading: false};
        case CBN_ERROR:
            return {...state, couponByName_error: action.payload, loading: false};
        case COG1_ERROR:
            return {...state, coupon_error: action.payload, loading: false};
        case COC_ERROR:
            return {...state, create_error: action.payload, loading: false};
        case COE_ERROR:
            return {...state, edit_error: action.payload, loading: false};
        case COD_ERROR:
            return {...state, delete_error: action.payload, loading: false};
        default:
            return state;
    }
};

export default CouponReducer;
