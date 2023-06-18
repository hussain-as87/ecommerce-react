import {AUTH_FORGET_PASSWORD, AUTH_LOGIN, AUTH_SIGNUP, ERROR} from "../Types";

const initialState = {
  signup: [],
  login: [],
  forget: [],
  error: [],
  loading: true,
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGNUP:
      return { ...state, signup: action.payload, loading: false };
      case AUTH_LOGIN:
        return { ...state, login: action.payload, loading: false };
        case AUTH_FORGET_PASSWORD:
        return { ...state, forget: action.payload, loading: false };
      case ERROR:
      return { ...state, error: action.payload, loading: true };
    default:
      return state;
  }
};

export default AuthReducer;
