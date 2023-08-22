import {
    BNC_ERROR,
    BND_ERROR,
    BNE_ERROR, BNG1_ERROR,
    BNG_ERROR,
    CREATE_BANNER,
    DELETE_BANNER,
    EDIT_BANNER,
    GET_ALL_BANNERS,
    GET_BANNER
} from "../Types";

const initialState = {
    banners: [],
    banner: [],
    create: [],
    edit: [],
    delete: [],
    loading: true,
    banners_error: [],
    banner_error: [],
    create_error: [],
    edit_error: [],
    delete_error: [],
};
const BrandReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BANNERS:
            return {...state, banners: action.payload, loading: false};
        case GET_BANNER:
            return {...state, banner: action.payload, loading: false};
        case CREATE_BANNER:
            return {...state, create: action.payload, loading: false};
        case EDIT_BANNER:
            return {...state, edit: action.payload, loading: false};
        case DELETE_BANNER:
            return {...state, delete: action.payload, loading: false};
        case BNG_ERROR:
            return {...state, banners_error: action.payload, loading: false};
        case BNG1_ERROR:
            return {...state, banners_error: action.payload, loading: false};
        case BNC_ERROR:
            return {...state, create_error: action.payload, loading: false};
        case BNE_ERROR:
            return {...state, edit_error: action.payload, loading: false};
        case BND_ERROR:
            return {...state, delete_error: action.payload, loading: false};
        default:
            return state;
    }
};

export default BrandReducer;
