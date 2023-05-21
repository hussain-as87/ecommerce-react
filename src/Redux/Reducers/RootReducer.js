import {combineReducers} from "redux"
import CategoryReducer from "./CategoryReducer"
import BrandReducer from "./BrandReducer";

const RootReducer = combineReducers({
    categories:CategoryReducer,
    brands:BrandReducer
})
export default RootReducer