import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";

const AdminSideBar = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link>
                <Link to="/admin/orders" style={{textDecoration: "auto"}}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Orders</div>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/admin/products" style={{textDecoration: "auto"}}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Products</div>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/admin/categories" style={{textDecoration: "auto"}}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Categories</div>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/admin/brands" style={{textDecoration: "auto"}}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Brands</div>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/admin/banners" style={{textDecoration: "auto"}}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Banners</div>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/admin/subcategories" style={{textDecoration: "auto"}}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Subcategories</div>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/admin/brands/create" style={{textDecoration: "auto"}}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Create Brands</div>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/admin/banners/create" style={{textDecoration: "auto"}}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Create Banners</div>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/admin/categories/create" style={{textDecoration: "auto"}}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Create Category</div>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/admin/subcategories/create" style={{textDecoration: "auto"}}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Create Subcategory
                    </div>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/admin/products/create" style={{textDecoration: "auto"}}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Create Product</div>
                </Link>
            </Nav.Link>
            <Nav.Link> <Link to="/admin/coupons/create" style={{textDecoration: "auto"}}>
                <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Coupons</div>
            </Link>
            </Nav.Link>
        </Nav>
    )
}
export default AdminSideBar