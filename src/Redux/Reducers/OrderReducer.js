import {
    GET_ALL_ORDERS,
    GET_ORDER,
    CREATE_ORDER,
    UPDATE_TO_Paid,
    UPDATE_TO_DELIVER,
    GET_CHECKOUT_SESSION,
    OG_ERROR,
    OG1_ERROR,
    OC_ERROR,
    OETP_ERROR,
    OETD_ERROR,
    OGCS_ERROR
} from "../Types";

const initialState = {
    orders: [],
    order: [],
    create: [],
    updateToPaid: [],
    updateToDeliver: [],
    getCheckoutList: [],
    orders_error: [],
    order_error: [],
    create_error: [],
    updateToPaid_error: [],
    updateToDeliver_error: [],
    getCheckoutList_error: [],
    loading: true,
};
const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ORDERS:
            return {...state, orders: action.payload, loading: false};
        case GET_ORDER:
            return {...state, order: action.payload, loading: false};
        case CREATE_ORDER:
            return {...state, create: action.payload, loading: false};
        case UPDATE_TO_Paid:
            return {...state, updateToPaid: action.payload, loading: false};
        case UPDATE_TO_DELIVER:
            return {...state, updateToDeliver: action.payload, loading: false};
        case GET_CHECKOUT_SESSION:
            return {...state, updateToDeliver: action.payload, loading: false};

        case OG_ERROR:
            return {...state, orders_error: action.payload, loading: false};
        case OG1_ERROR:
            return {...state, order_error: action.payload, loading: false};
        case OC_ERROR:
            return {...state, create_error: action.payload, loading: false};
        case OETP_ERROR:
            return {...state, updateToPaid_error: action.payload, loading: false};
        case OETD_ERROR:
            return {...state, updateToDeliver_error: action.payload, loading: false};
        case OGCS_ERROR:
            return {...state, getCheckoutList_error: action.payload, loading: false};

        default:
            return state;
    }
};

export default OrderReducer;
