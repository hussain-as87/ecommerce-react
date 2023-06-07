import HomePage from "./Pages/Home/HomePage";
import {BrowserRouter, Routes, Route} from "react-router-dom"
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
import AdminEditProductPage from "./Pages/Admin/AdminEditProductPage";

function App() {

    return (
        <div className="font">
            <NavbarSection/>
            <BrowserRouter>
                <Routes>
                    {/** Landing page routes */}
                    <Route index element={<HomePage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/categories" element={<Categories/>}/>
                    <Route path="/brands" element={<Brands/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/products/:id" element={<ProductDetails/>}/>
                    <Route path="/cart" element={<CartContent/>}/>
                    <Route path="/order/payment" element={<PaymentMethodType/>}/>

                    {/** Admin dashboard routes*/}
                    <Route path="/admin/products" element={<AdminProductsPage/>}/>
                    <Route path="/admin/orders" element={<AdminOrdersPage/>}/>
                    <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage/>}/>
                    <Route path="/admin/products/create" element={<AdminCreateProductPage/>}/>
                    <Route path="/admin/products/edit/:id" element={<AdminEditProductPage/>}/>
                    <Route path="/admin/brands/create" element={<AdminCreateBrandPage/>}/>
                    <Route path="/admin/categories/create" element={<AdminCreateCategoryPage/>}/>
                    <Route path="/admin/subcategories/create" element={<AdminCreateSubCategoryPage/>}/>

                    {/** User dashboard routes*/}
                    <Route path="/user/orders" element={<UserOrdersPage/>}/>
                    <Route path="/user/favorites" element={<UserFavoritesPage/>}/>
                    <Route path="/user/addresses" element={<UserAddressesPage/>}/>
                    <Route path="/user/addresses/create" element={<UserCreateAddressPage/>}/>
                    <Route path="/user/addresses/edit" element={<UserEditAddressPage/>}/>
                    <Route path="/user/profile" element={<UserProfilePage/>}/>
                </Routes>
            </BrowserRouter>


            <Footer/>
        </div>
    );
}

export default App;
