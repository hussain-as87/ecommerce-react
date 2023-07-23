import HomePage from "./Pages/Home/HomePage";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Footer from "./Components/Utility/Footer";
import NavbarSection from "./Components/Utility/NavbarSection";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Categories from "./Pages/Category/Categories";
import Brands from "./Pages/Brand/Brands";
import Products from "./Pages/Product/Products";
import ProductDetails from "./Pages/Product/ProductDetails";
import CartContent from "./Pages/Cart/CartContent";
import PaymentMethodType from "./Pages/Checkout/PaymentMethodType";
import AdminProductsPage from "./Pages/Admin/AdminProductsPage";
import AdminOrdersPage from "./Pages/Admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./Pages/Admin/AdminOrderDetailsPage";
import AdminCreateBrandPage from "./Pages/Admin/AdminCreateBrandPage";
import AdminCreateProductPage from "./Pages/Admin/AdminCreateProductPage";
import AdminCreateCategoryPage from "./Pages/Admin/AdminCreateCategoryPage";
import AdminCreateSubCategoryPage from "./Pages/Admin/AdminCreateSubCategoryPage";
import UserFavoritesPage from "./Pages/User/UserFavoritesPage";
import UserOrdersPage from "./Pages/User/UserOrdersPage";
import UserAddressesPage from "./Pages/User/Addresses/UserAddressesPage";
import UserCreateAddressPage from "./Pages/User/Addresses/UserCreateAddressPage";
import UserEditAddressPage from "./Pages/User/Addresses/UserEditAddressPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import VerifyRestPassword from "./Pages/Auth/VerifyRestPassword";
import RestPassword from "./Pages/Auth/ResetCodePassword";
import AdminCreateCouponPage from "./Pages/Admin/AdminCreateCouponPage";
import Layout from "./Pages/Admin/Layout";
import {ProtectedAuthRoute} from "./Controllers/AuthController";
import ProtectedRoute from "./Components/Utility/ProtectedRoute";
import AdminProfilePage from "./Pages/Admin/AdminProfilePage";
import {GetProducts} from "./Controllers/ProductController";
import AdminCategoriesPage from "./Pages/Admin/AdminCategoriesPage";
import AdminBrandsPage from "./Pages/Admin/AdminBrandsPage";
import AdminSubcategoriesPage from "./Pages/Admin/AdminSubcategoriesPage";


function App() {
    const indexProductForm = GetProducts()
    const {isAdmin, isUser, userData} = ProtectedAuthRoute()


    return (
        <div className="font">
            <NavbarSection index={indexProductForm}/>
            <BrowserRouter>
                {indexProductForm.keyword && <Navigate to="/products"/>}
                <Routes>
                    {/** Landing page routes */}
                    <Route index element={<HomePage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/singup" element={<Register/>}/>
                    <Route path="/forgotPassword" element={<ForgetPassword/>}/>
                    <Route path="/verifyResetPassword" element={<VerifyRestPassword/>}/>
                    <Route path="/resetPassword" element={<RestPassword/>}/>
                    <Route path="/categories" element={<Categories/>}/>
                    <Route path="/brands" element={<Brands/>}/>
                    <Route path="/products" element={<Products index={indexProductForm}/>}/>
                    <Route path="/products/:id" element={<ProductDetails/>}/>
                    <Route path="/cart" element={<CartContent/>}/>

                    <Route element={<ProtectedRoute auth={isAdmin}/>}>
                        <Route path="/admin/" element={<Layout/>}/>
                        <Route path="/admin/products" element={<AdminProductsPage/>}/>
                        <Route path="/admin/categories" element={<AdminCategoriesPage/>}/>
                        <Route path="/admin/brands" element={<AdminBrandsPage/>}/>
                        <Route path="/admin/subcategories" element={<AdminSubcategoriesPage/>}/>
                        <Route path="/admin/orders" element={<AdminOrdersPage/>}/>
                        <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage/>}/>
                        <Route path="/admin/products/create" element={<AdminCreateProductPage/>}/>
                        <Route path="/admin/brands/create" element={<AdminCreateBrandPage/>}/>
                        <Route path="/admin/categories/create" element={<AdminCreateCategoryPage/>}/>
                        <Route path="/admin/subcategories/create" element={<AdminCreateSubCategoryPage/>}/>
                        <Route path="/admin/coupons/create" element={<AdminCreateCouponPage/>}/>
                        <Route path="/admin/profile" element={<AdminProfilePage/>}/>
                    </Route>


                    <Route element={<ProtectedRoute auth={isUser}/>}>
                        <Route path="/user/orders" element={<UserOrdersPage/>}/>
                        <Route path="/order/paymethod" element={<PaymentMethodType/>}/>
                        <Route path="/user/favorites" element={<UserFavoritesPage/>}/>
                        <Route path="/user/addresses" element={<UserAddressesPage/>}/>
                        <Route path="/user/addresses/create" element={<UserCreateAddressPage/>}/>
                        <Route path="/user/addresses/edit" element={<UserEditAddressPage/>}/>
                        <Route path="/user/profile" element={<UserProfilePage/>}/>
                    </Route>

                </Routes>
            </BrowserRouter>


            <Footer/>
        </div>
    )
        ;
}

export default App;
