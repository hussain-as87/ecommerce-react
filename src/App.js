import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import {GetProducts} from "./Controllers/ProductController";
import HomePage from "./Pages/Home/HomePage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import VerifyRestPassword from "./Pages/Auth/VerifyRestPassword";
import RestPassword from "./Pages/Auth/ResetCodePassword";
import Categories from "./Pages/Category/Categories";
import Brands from "./Pages/Brand/Brands";
import Products from "./Pages/Product/Products";
import ProductDetails from "./Pages/Product/ProductDetails";
import CartContent from "./Pages/Cart/CartContent";
import BadConnectionPage from "./Pages/Features/BadConnectionPage";
import {
    ProtectionRoutes,
    ProtectionLoginRoutes,
} from "./Hooks/ProtectionRoutes";
import UserLayout from "./Pages/Layouts/UserLayout";
import UserOrdersPage from "./Pages/User/UserOrdersPage";
import PaymentMethodType from "./Pages/Checkout/PaymentMethodType";
import UserFavoritesPage from "./Pages/User/UserFavoritesPage";
import UserAddressesPage from "./Pages/User/Addresses/UserAddressesPage";
import UserCreateAddressPage from "./Pages/User/Addresses/UserCreateAddressPage";
import UserEditAddressPage from "./Pages/User/Addresses/UserEditAddressPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import AdminEditProductPage from "./Pages/Admin/Product/AdminEditProductPage";
import HomeLayout from "./Pages/Layouts/HomeLayout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AdminCreateBannerPage from "./Pages/Admin/Banner/AdminCreateBannerPage";
import AdminBannersPage from "./Pages/Admin/Banner/AdminBannersPage";
import {useEffect} from "react";
import AdminLayout from "./Pages/Layouts/Admin/AdminLayout";
import AdminProductsPage from "./Pages/Admin/Product/AdminProductsPage";
import AdminCategoriesPage from "./Pages/Admin/Category/AdminCategoriesPage";
import AdminBrandsPage from "./Pages/Admin/Brand/AdminBrandsPage";
import AdminSubcategoriesPage from "./Pages/Admin/Subcategory/AdminSubcategoriesPage";
import AdminOrdersPage from "./Pages/Admin/Order/AdminOrdersPage";
import AdminOrderDetailsPage from "./Pages/Admin/Order/AdminOrderDetailsPage";
import AdminCreateProductPage from "./Pages/Admin/Product/AdminCreateProductPage";
import AdminCreateBrandPage from "./Pages/Admin/AdminProfilePage";
import AdminCreateCategoryPage from "./Pages/Admin/Category/AdminCreateCategoryPage";
import AdminCreateSubCategoryPage from "./Pages/Admin/Subcategory/AdminCreateSubCategoryPage";
import AdminCreateCouponPage from "./Pages/Admin/Coupon/AdminCreateCouponPage";
import AdminProfilePage from "./Pages/Admin/AdminProfilePage";
import Favorites from "./Pages/Favorite/Favorites";

function App() {
    const location = useLocation()
    const navigate = useNavigate()
    const indexProductForm = GetProducts();
    useEffect(() => {
        if (indexProductForm.keyword) {
            if (location.pathname.includes('admin')) {
                return navigate('/admin/products')
            } else {
                return navigate('/shop')
            }
        }
    }, [indexProductForm.keyword])
    return (
        <div>
            <Routes>

                {/**Admin Dashboard routes Start*/}
                <Route path="/admin/*" element={<AdminLayout index={indexProductForm}/>}>
                    <Route path="" element={<ProtectionRoutes authType="admin"/>}>
                        <Route path="products" element={<AdminProductsPage index={indexProductForm}/>}/>
                        <Route
                            path="products/edit/:id"
                            element={<AdminEditProductPage/>}
                        />
                        <Route path="categories" element={<AdminCategoriesPage/>}/>
                        <Route path="brands" element={<AdminBrandsPage/>}/>
                        <Route path="banners" element={<AdminBannersPage/>}/>
                        <Route
                            path="subcategories"
                            element={<AdminSubcategoriesPage/>}
                        />
                        <Route path="orders" element={<AdminOrdersPage/>}/>
                        <Route path="orders/:id" element={<AdminOrderDetailsPage/>}/>
                        <Route
                            path="products/create"
                            element={<AdminCreateProductPage/>}
                        />
                        <Route path="brands/create" element={<AdminCreateBrandPage/>}/>
                        <Route path="banners/create" element={<AdminCreateBannerPage/>}/>
                        <Route
                            path="categories/create"
                            element={<AdminCreateCategoryPage/>}
                        />
                        <Route
                            path="subcategories/create"
                            element={<AdminCreateSubCategoryPage/>}
                        />
                        <Route
                            path="coupons/create"
                            element={<AdminCreateCouponPage/>}
                        />
                        <Route path="profile" element={<AdminProfilePage/>}/>
                    </Route>
                </Route>
                {/**Admin Dashboard routes End*/}

                {/**User Dashboard routes Start*/}
                {/*      <Route path="/user/*" element={<HomeLayout index={indexProductForm}/>}>
                    <Route path="" element={<ProtectionRoutes authType="user"/>}>
                        <Route path="orders" element={<UserOrdersPage/>}/>
                        <Route path="paymethod" element={<PaymentMethodType/>}/>
                        <Route path="favorites" element={<UserFavoritesPage/>}/>
                        <Route path="addresses" element={<UserAddressesPage/>}/>
                        <Route
                            path="addresses/create"
                            element={<UserCreateAddressPage/>}
                        />
                        <Route path="addresses/edit" element={<UserEditAddressPage/>}/>
                        <Route path="profile" element={<UserProfilePage/>}/>
                    </Route>
                </Route>*/}
                {/**User Dashboard routes End*/}

                {/** Landing page routes Start*/}
                <Route path="/*" element={<HomeLayout index={indexProductForm}/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="categories" element={<Categories/>}/>
                    <Route path="brands" element={<Brands/>}/>
                    <Route
                        path="shop"
                        element={<Products index={indexProductForm}/>}
                    />
                    <Route path="" element={<ProtectionRoutes authType="user"/>}>
                        <Route
                            path="favorite"
                            element={<Favorites index={indexProductForm}/>}
                        />
                        <Route path="cart" element={<CartContent/>}/>
                        <Route path="checkout" element={<PaymentMethodType/>}/>
                        <Route path="profile" element={<UserProfilePage/>}/>

                    </Route>

                    <Route path=":id" element={<ProductDetails/>}/>

                    <Route path="about-us" element={<About/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="500" element={<BadConnectionPage/>}/>


                    {/**Protected routes (don't allow user to access if he already signed) Start*/}
                    <Route path="" element={<ProtectionLoginRoutes/>}>
                        <Route path="login" element={<Login/>}/>
                        <Route path="singup" element={<Register/>}/>
                        <Route path="forgotPassword" element={<ForgetPassword/>}/>
                        <Route
                            path="verifyResetPassword"
                            element={<VerifyRestPassword/>}
                        />
                        <Route path="resetPassword" element={<RestPassword/>}/>
                    </Route>
                    {/**Protected routes (don't allow user to access if he already signed) End*/}
                </Route>
                {/** Landing page routes End*/}
            </Routes>
        </div>
    );
}

export default App;
