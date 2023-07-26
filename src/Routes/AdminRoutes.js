import {Route, Routes} from "react-router-dom";
import Layout from "../Pages/Admin/Layout";
import AdminProductsPage from "../Pages/Admin/AdminProductsPage";
import AdminCategoriesPage from "../Pages/Admin/AdminCategoriesPage";
import AdminBrandsPage from "../Pages/Admin/AdminBrandsPage";
import AdminSubcategoriesPage from "../Pages/Admin/AdminSubcategoriesPage";
import AdminOrdersPage from "../Pages/Admin/AdminOrdersPage";
import AdminOrderDetailsPage from "../Pages/Admin/AdminOrderDetailsPage";
import AdminCreateProductPage from "../Pages/Admin/AdminCreateProductPage";
import AdminCreateBrandPage from "../Pages/Admin/AdminCreateBrandPage";
import AdminCreateCategoryPage from "../Pages/Admin/AdminCreateCategoryPage";
import AdminCreateSubCategoryPage from "../Pages/Admin/AdminCreateSubCategoryPage";
import AdminCreateCouponPage from "../Pages/Admin/AdminCreateCouponPage";
import AdminProfilePage from "../Pages/Admin/AdminProfilePage";

const AdminRoutes = () => {
    return (<>
                <Route index element={<Layout/>}/>
                <Route path="products" element={<AdminProductsPage/>}/>
                <Route path="categories" element={<AdminCategoriesPage/>}/>
                <Route path="brands" element={<AdminBrandsPage/>}/>
                <Route path="subcategories" element={<AdminSubcategoriesPage/>}/>
                <Route path="orders" element={<AdminOrdersPage/>}/>
                <Route path="orders/:id" element={<AdminOrderDetailsPage/>}/>
                <Route path="products/create" element={<AdminCreateProductPage/>}/>
                <Route path="brands/create" element={<AdminCreateBrandPage/>}/>
                <Route path="categories/create" element={<AdminCreateCategoryPage/>}/>
                <Route path="subcategories/create" element={<AdminCreateSubCategoryPage/>}/>
                <Route path="coupons/create" element={<AdminCreateCouponPage/>}/>
                <Route path="profile" element={<AdminProfilePage/>}/>
        </>
    )
}
export default AdminRoutes