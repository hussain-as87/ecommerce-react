import {CREATE_BRAND, ERROR, GET_ALL_BRANDS} from "../Types";

const initialState = {
  brands: [],
  loading: true,
};
const BrandReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BRANDS:
      return { ...state, brands: action.payload, loading: false };
      case CREATE_BRAND:
        return { ...state, brands: action.payload, loading: false };
      case ERROR:
      return { ...state, brands: action.payload, loading: true };
    default:
      return state;
  }
};

export default BrandReducer;
