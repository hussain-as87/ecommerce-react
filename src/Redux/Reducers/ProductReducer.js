import {
    CREATE_PRODUCT, DELETE_PRODUCT,
    ERROR,
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    GET_PRODUCTS_BY_CATEGORY,
    GET_PRODUCTS_BY_SOLD,
    EDIT_PRODUCT
} from "../Types";

const initialState = {
    products: [],
    loading: true,
    error:[]
};
const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {...state, products: action.payload, loading: false};
        case GET_PRODUCTS_BY_CATEGORY:
            return {...state, categoryProducts: action.payload, loadingCP: false};
        case GET_PRODUCTS_BY_SOLD:
            return {...state, soldProducts: action.payload, loadingS: false};
        case CREATE_PRODUCT:
            return {...state, products: action.payload, loading: false};
        case EDIT_PRODUCT:
            return {...state, ProductE: action.payload, loadingE: false};
        case GET_PRODUCT:
            return {...state, product: action.payload, loading: false};
        case DELETE_PRODUCT:
            return {...state, productD: action.payload, loadingD: false};
        case ERROR:
            return {...state, error: action.payload, loading: true};
        default:
            return state;
    }
};

/*
*     switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {...state, products: action.payload, loadingP: false};
        case GET_PRODUCTS_BY_CATEGORY:
            return {...state, categoryProducts: action.payload, loadingCP: false};
        case CREATE_PRODUCT:
            return {...state, products: action.payload, loadingC: false};
        case GET_PRODUCT:
            return {...state, product: action.payload, loadingSP: false};
        case ERROR:
            return {...state, products: action.payload, loadingE: true};
        default:
            return state;
    }*/
export default ProductReducer;
