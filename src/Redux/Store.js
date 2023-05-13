import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./Reducers/RootReducer";

const initialState = {};
const middleware = [thunk];

const Store = createStore(
  RootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default Store