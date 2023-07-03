import React from 'react'
import {Row, Col} from 'react-bootstrap'
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAddCoupon from "../../Components/Admin/Coupons/AdminAddCoupon";
import {Route, Routes} from "react-router-dom";
import AdminProductsPage from "./AdminProductsPage";
import AdminOrdersPage from "./AdminOrdersPage";
import AdminOrderDetailsPage from "./AdminOrderDetailsPage";
import AdminCreateProductPage from "./AdminCreateProductPage";
import AdminEditProductPage from "./AdminEditProductPage";
import AdminCreateBrandPage from "./AdminCreateBrandPage";
import AdminCreateCategoryPage from "./AdminCreateCategoryPage";
import AdminCreateSubCategoryPage from "./AdminCreateSubCategoryPage";
import AdminCreateCouponPage from "./AdminCreateCouponPage";

const Layout = () => {
    return (
        <Row className='py-3'>
            <Col sm="4" xs="3" md="3">
                <AdminSideBar/>
            </Col>

            <Col sm="8" xs="9" md="9">
                <Routes>
                    <Route path="/admin/products" element={<AdminProductsPage/>}/>
                    <Route path="/admin/orders" element={<AdminOrdersPage/>}/>
                    <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage/>}/>
                    <Route path="/admin/products/create" element={<AdminCreateProductPage/>}/>
                    <Route path="/admin/products/edit/:id" element={<AdminEditProductPage/>}/>
                    <Route path="/admin/brands/create" element={<AdminCreateBrandPage/>}/>
                    <Route path="/admin/categories/create" element={<AdminCreateCategoryPage/>}/>
                    <Route path="/admin/subcategories/create" element={<AdminCreateSubCategoryPage/>}/>
                    <Route path="/admin/coupons/create" element={<AdminCreateCouponPage/>}/>
                </Routes>
            </Col>
        </Row>
    )
}

export default Layout