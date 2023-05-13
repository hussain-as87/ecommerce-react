import { ERROR, GET_ALL_CATEGORIES } from "../Types";

const initialState = {
  category: [],
  loading: true,
};
const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return { ...state, category: action.payload, loading: false };
      case ERROR:
      return { ...state, category: action.payload, loading: true };
    default:
      return state;
  }
};

export default CategoryReducer;
