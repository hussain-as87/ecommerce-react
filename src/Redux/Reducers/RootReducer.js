import {combineReducers} from "redux"
import CategoryReducer from "./CategoryReducer"
import BrandReducer from "./BrandReducer";
import SubcategoryReducer from "./SubcategoryReducer";
import ProductReducer from "./ProductReducer";
import AuthReducer from "./AuthReducer";

const RootReducer = combineReducers({
    categories:CategoryReducer,
    brands:BrandReducer,
    subcategories:SubcategoryReducer,
    products:ProductReducer,
    auth:AuthReducer
})
export default RootReducer