import {combineReducers} from "redux"
import CategoryReducer from "./CategoryReducer"
import BrandReducer from "./BrandReducer";
import SubcategoryReducer from "./SubcategoryReducer";

const RootReducer = combineReducers({
    categories:CategoryReducer,
    brands:BrandReducer,
    subcategories:SubcategoryReducer
})
export default RootReducer