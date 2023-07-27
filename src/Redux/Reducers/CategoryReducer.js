import {
    CC_ERROR,
    CD_ERROR, CE_ERROR, CG1_ERROR,
    CG_ERROR,
    CREATE_CATEGORY,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    GET_ALL_CATEGORIES, GET_CATEGORY
} from "../Types";

const initialState = {
    categories: [],
    category: [],
    create: [],
    edit: [],
    delete: [],
    loading: true,
    categories_error: [],
    category_error: [],
    create_error: [],
    edit_error: [],
    delete_error: [],
};
const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return {...state, categories: action.payload, loading: false};
         case GET_CATEGORY:
            return {...state, category: action.payload, loading: false};
        case CREATE_CATEGORY:
            return {...state, create: action.payload, loading: false};
        case EDIT_CATEGORY:
            return {...state, edit: action.payload, loading: false};
        case DELETE_CATEGORY:
            return {...state, delete: action.payload, loading: false};
        case CG_ERROR:
            return {...state, categories_error: action.payload, loading: false};
         case CG1_ERROR:
            return {...state, categories_error: action.payload, loading: false};
        case CC_ERROR:
            return {...state, create_error: action.payload, loading: false};
        case CE_ERROR:
            return {...state, edit_error: action.payload, loading: false};
        case CD_ERROR:
            return {...state, delete_error: action.payload, loading: false};
        default:
            return state;
    }
};

export default CategoryReducer;
