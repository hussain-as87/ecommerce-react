import {
    BC_ERROR,
    BD_ERROR,
    BE_ERROR, BG1_ERROR,
    BG_ERROR,
    CREATE_BRAND,
    DELETE_BRAND,
    EDIT_BRAND,
    GET_ALL_BRANDS,
    GET_BRAND
} from "../Types";

const initialState = {
    brands: [],
    brand: [],
    create: [],
    edit: [],
    delete: [],
    loading: true,
    brands_error: [],
    brand_error: [],
    create_error: [],
    edit_error: [],
    delete_error: [],
};
const BrandReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BRANDS:
            return {...state, brands: action.payload, loading: false};
        case GET_BRAND:
            return {...state, brand: action.payload, loading: false};
        case CREATE_BRAND:
            return {...state, create: action.payload, loading: false};
        case EDIT_BRAND:
            return {...state, edit: action.payload, loading: false};
        case DELETE_BRAND:
            return {...state, delete: action.payload, loading: false};
        case BG_ERROR:
            return {...state, brands_error: action.payload, loading: false};
        case BG1_ERROR:
            return {...state, brands_error: action.payload, loading: false};
        case BC_ERROR:
            return {...state, create_error: action.payload, loading: false};
        case BE_ERROR:
            return {...state, edit_error: action.payload, loading: false};
        case BD_ERROR:
            return {...state, delete_error: action.payload, loading: false};
        default:
            return state;
    }
};

export default BrandReducer;
