import {
    CREATE_SUBCATEGORY,
    DELETE_SUBCATEGORY,
    EDIT_SUBCATEGORY, GET_ALL_SUBCATEGORIES,
    GET_SUBCATEGORY_BY_CATEGORY, GET_SUBCATEGORY,
    SC_ERROR, SD_ERROR, SE_ERROR,SGBC_ERROR,
    SG1_ERROR, SG_ERROR
} from "../Types";

const initialState = {
    subcategories: [],
    subcategoriesByCategory: [],
    subcategory: [],
    create: [],
    edit: [],
    delete: [],
    loading: true,
    subcategories_error: [],
    subcategoriesByCategory_error: [],
    subcategory_error: [],
    create_error: [],
    edit_error: [],
    delete_error: [],
};
const SubcategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SUBCATEGORIES:
            return {...state, subcategories: action.payload, loading: false};
        case GET_SUBCATEGORY_BY_CATEGORY:
            return {...state, subcategoriesByCategory: action.payload, loading: false};
        case GET_SUBCATEGORY:
            return {...state, subcategory: action.payload, loading: false};
        case CREATE_SUBCATEGORY:
            return {...state, create: action.payload, loading: false};
        case EDIT_SUBCATEGORY:
            return {...state, edit: action.payload, loading: false};
        case DELETE_SUBCATEGORY:
            return {...state, delete: action.payload, loading: false};
        case SG_ERROR:
            return {...state, subcategories_error: action.payload, loading: false};
        case SG1_ERROR:
            return {...state, subcategory_error: action.payload, loading: false};
         case SGBC_ERROR:
            return {...state, subcategoriesByCategory_error: action.payload, loading: false};
        case SC_ERROR:
            return {...state, create_error: action.payload, loading: false};
        case SE_ERROR:
            return {...state, edit_error: action.payload, loading: false};
        case SD_ERROR:
            return {...state, delete_error: action.payload, loading: false};
        default:
            return state;
    }
};

export default SubcategoryReducer;
