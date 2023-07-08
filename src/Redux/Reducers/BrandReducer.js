import {BC_ERROR, BG_ERROR, CREATE_BRAND, GET_ALL_BRANDS} from "../Types";

const initialState = {
    brands: [],
    create: [],
    loading: true,
    brands_error: [],
    create_error: []
};
const BrandReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BRANDS:
            return {...state, brands: action.payload, loading: false};
        case CREATE_BRAND:
            return {...state, create: action.payload, loading: false};
        case BG_ERROR:
            return {...state, brands_error: action.payload, loading: false};
        case BC_ERROR:
            return {...state, create_error: action.payload, loading: false};
        default:
            return state;
    }
};

export default BrandReducer;
