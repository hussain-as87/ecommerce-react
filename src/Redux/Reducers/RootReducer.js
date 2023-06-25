import {combineReducers} from "redux"
import CategoryReducer from "./CategoryReducer"
import BrandReducer from "./BrandReducer";
import SubcategoryReducer from "./SubcategoryReducer";
import ProductReducer from "./ProductReducer";
import AuthReducer from "./AuthReducer";
import UserReducer from "./UserReducer";
import WishlistReducer from "./WishlistReducer";

const RootReducer = combineReducers({
    categories:CategoryReducer,
    brands:BrandReducer,
    subcategories:SubcategoryReducer,
    products:ProductReducer,
    auth:AuthReducer,
    users:UserReducer,
    wishlist:WishlistReducer,
})
export default RootReducer