import {CC_ERROR, CG_ERROR, CREATE_CATEGORY, GET_ALL_CATEGORIES} from "../Types";

const initialState = {
  categories: [],
  create: [],
  loading: true,
  categories_error:[],
  create_error:[]
};
const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return { ...state, categories: action.payload, loading: false };
      case CREATE_CATEGORY:
        return { ...state, create: action.payload, loading: false };
      case CG_ERROR:
      return { ...state, categories_error: action.payload, loading: false };
      case CC_ERROR:
      return { ...state, create_error: action.payload, loading: false };
    default:
      return state;
  }
};

export default CategoryReducer;
