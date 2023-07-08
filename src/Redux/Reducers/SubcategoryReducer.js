import {CREATE_SUBCATEGORY, GET_SPECIFIC_SUBCATEGORY, SC_ERROR, SG1_ERROR} from "../Types";

const initialState = {
    subcategory: [],
    create: [],
    loading: true,
    subcategories_error: [],
    create_error: [],
};
const SubcategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SUBCATEGORY:
            return {...state, create: action.payload, loading: false};
        case GET_SPECIFIC_SUBCATEGORY:
            return {...state, subcategory: action.payload, loading: false};
        case SG1_ERROR:
            return {...state, subcategories_error: action.payload, loading: false};
        case SC_ERROR:
            return {...state, create_error: action.payload, loading: false};
        default:
            return state;
    }
};

export default SubcategoryReducer;
