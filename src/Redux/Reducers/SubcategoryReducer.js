import {CREATE_SUBCATEGORY, ERROR, GET_SPECIFIC_SUBCATEGORY} from "../Types";

const initialState = {
    subcategories: [],
    loading: true,
    error: [],
};
const SubcategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SUBCATEGORY:
            return {...state, subcategories: action.payload, loading: false};
        case GET_SPECIFIC_SUBCATEGORY:
            return {...state, subcategories: action.payload, loading: false};
        case ERROR:
            return {...state, error: action.payload, loading: true};
        default:
            return state;
    }
};

export default SubcategoryReducer;
