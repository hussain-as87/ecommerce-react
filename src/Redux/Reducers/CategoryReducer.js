import {CREATE_CATEGORY, ERROR, GET_ALL_CATEGORIES} from "../Types";

const initialState = {
  categories: [],
  loading: true,
};
const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return { ...state, categories: action.payload, loading: false };
      case CREATE_CATEGORY:
        return { ...state, categories: action.payload, loading: false };
      case ERROR:
      return { ...state, categories: action.payload, loading: true };
    default:
      return state;
  }
};

export default CategoryReducer;
