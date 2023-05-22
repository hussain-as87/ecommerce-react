import {CREATE_SUBCATEGORY, ERROR} from "../Types";

const initialState = {
    subcategories: [],
    loading: true,
};
const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SUBCATEGORY:
            return {...state, subcategories: action.payload, loading: false};
        case ERROR:
            return {...state, subcategories: action.payload, loading: true};
        default:
            return state;
    }
};

export default CategoryReducer;
