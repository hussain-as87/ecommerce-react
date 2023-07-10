import {combineReducers} from "redux"
import CategoryReducer from "./CategoryReducer"
import BrandReducer from "./BrandReducer";
import SubcategoryReducer from "./SubcategoryReducer";
import ProductReducer from "./ProductReducer";
import AuthReducer from "./AuthReducer";
import UserReducer from "./UserReducer";
import WishlistReducer from "./WishlistReducer";
import ReviewReducer from "./ReviewReducer";
import CouponReducer from "./CouponReducer";
import CartReducer from "./CartReducer";
import OrderReducer from "./OrderReducer";

const RootReducer = combineReducers({
    categories:CategoryReducer,
    brands:BrandReducer,
    subcategories:SubcategoryReducer,
    products:ProductReducer,
    auth:AuthReducer,
    users:UserReducer,
    wishlist:WishlistReducer,
    reviews:ReviewReducer,
    coupons:CouponReducer,
    carts:CartReducer,
    orders:OrderReducer,
})
export default RootReducer