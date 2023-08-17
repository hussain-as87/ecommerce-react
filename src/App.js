import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Footer from "./Components/Utility/Footer";
import NavbarSection from "./Components/Utility/NavbarSection";
import {GetProducts} from "./Controllers/ProductController";
import {ProtectedAuthRoute} from "./Controllers/AuthController";
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
import Layout from "./Pages/Admin/Layout";
import AdminProductsPage from "./Pages/Admin/AdminProductsPage";
import AdminCategoriesPage from "./Pages/Admin/AdminCategoriesPage";
import AdminBrandsPage from "./Pages/Admin/AdminBrandsPage";
import AdminSubcategoriesPage from "./Pages/Admin/AdminSubcategoriesPage";
import AdminOrdersPage from "./Pages/Admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./Pages/Admin/AdminOrderDetailsPage";
import AdminCreateProductPage from "./Pages/Admin/AdminCreateProductPage";
import AdminCreateBrandPage from "./Pages/Admin/AdminCreateBrandPage";
import AdminCreateCategoryPage from "./Pages/Admin/AdminCreateCategoryPage";
import AdminCreateSubCategoryPage from "./Pages/Admin/AdminCreateSubCategoryPage";
import AdminCreateCouponPage from "./Pages/Admin/AdminCreateCouponPage";
import AdminProfilePage from "./Pages/Admin/AdminProfilePage";
import AdminLayout from "./Pages/Layouts/AdminLayout";
import UserLayout from "./Pages/Layouts/UserLayout";
import UserOrdersPage from "./Pages/User/UserOrdersPage";
import PaymentMethodType from "./Pages/Checkout/PaymentMethodType";
import UserFavoritesPage from "./Pages/User/UserFavoritesPage";
import UserAddressesPage from "./Pages/User/Addresses/UserAddressesPage";
import UserCreateAddressPage from "./Pages/User/Addresses/UserCreateAddressPage";
import UserEditAddressPage from "./Pages/User/Addresses/UserEditAddressPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import AdminEditProductPage from "./Pages/Admin/AdminEditProductPage";
import HomeLayout from "./Pages/Layouts/HomeLayout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
    const indexProductForm = GetProducts();

    return (
        <div>
            <BrowserRouter>
                {indexProductForm.keyword && <Navigate to="/products"/>}
                <Routes>

                    {/**Admin Dashboard routes Start*/}
                    <Route path="/admin/*" element={<AdminLayout/>}>
                        <Route path="" element={<ProtectionRoutes authType="admin"/>}>
                            <Route index element={<Layout/>}/>
                            <Route path="products" element={<AdminProductsPage/>}/>
                            <Route
                                path="products/edit/:id"
                                element={<AdminEditProductPage/>}
                            />
                            <Route path="categories" element={<AdminCategoriesPage/>}/>
                            <Route path="brands" element={<AdminBrandsPage/>}/>
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
                    <Route path="/user/*" element={<UserLayout/>}>
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
                    </Route>
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
                        <Route path=":id" element={<ProductDetails/>}/>
                        <Route path="cart" element={<CartContent/>}/>
                        <Route path="checkout" element={<PaymentMethodType/>}/>
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
            </BrowserRouter>
        </div>
    );
}

export default App;
