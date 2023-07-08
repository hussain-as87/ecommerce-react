import {
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    GET_PRODUCTS_BY_CATEGORY,
    GET_PRODUCTS_BY_SOLD,
    EDIT_PRODUCT,
    PD_ERROR,
    PE_ERROR,
    PG_ERROR,
    PGS_ERROR,
    PGC_ERROR,
    PC_ERROR,
    PG1_ERROR,
} from "../Types";

const initialState = {
    products: [],
    create: [],
    edit: [],
    delete: [],
    productsBySold: [],
    productsByCategory: [],
    product: [],
    loading: true,
    products_error: [],
    create_error: [],
    edit_error: [],
    delete_error: [],
    productsBySold_error: [],
    productsByCategory_error: [],
    product_error: [],
};
const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {...state, products: action.payload, loading: false};
        case GET_PRODUCTS_BY_CATEGORY:
            return {...state, productsByCategory: action.payload, loading: false};
        case GET_PRODUCTS_BY_SOLD:
            return {...state, productsBySold: action.payload, loading: false};
        case CREATE_PRODUCT:
            return {...state, create: action.payload, loading: false};
        case EDIT_PRODUCT:
            return {...state, edit: action.payload, loading: false};
        case GET_PRODUCT:
            return {...state, product: action.payload, loading: false};
        case DELETE_PRODUCT:
            return {...state, delete: action.payload, loading: false};
        case PD_ERROR:
            return {...state, delete_error: action.payload, loading: false};
        case PE_ERROR:
            return {...state, edit_error: action.payload, loading: false};
        case PG_ERROR:
            return {...state, products_error: action.payload, loading: false};
        case PGS_ERROR:
            return {...state, productsBySold_error: action.payload, loading: false};
        case PGC_ERROR:
            return {...state, productsByCategory_error: action.payload, loading: false};
        case PC_ERROR:
            return {...state, create_error: action.payload, loading: false};
        case PG1_ERROR:
            return {...state, product_error: action.payload, loading: false};
        default:
            return state;
    }
};
export default ProductReducer;
