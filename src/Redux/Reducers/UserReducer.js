import {ERROR, GET_ALL_USERS, GET_LOGGED_USER} from "../Types";

const initialState = {
  user: [],
  users: [],
  error: [],
  loading: true,
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGGED_USER:
      return { ...state, user: action.payload, loading: false };
      case GET_ALL_USERS:
        return { ...state, users: action.payload, loading: false };
      case ERROR:
      return { ...state, error: action.payload, loading: true };
    default:
      return state;
  }
};

export default AuthReducer;
