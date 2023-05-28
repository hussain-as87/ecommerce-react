import {CREATE_PRODUCT, ERROR, GET_ALL_PRODUCTS} from "../Types";

const initialState = {
  products: [],
  loading: true,
};
const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, products: action.payload, loading: false };
      case CREATE_PRODUCT:
        return { ...state, products: action.payload, loading: false };
      case ERROR:
      return { ...state, products: action.payload, loading: true };
    default:
      return state;
  }
};

export default CategoryReducer;
