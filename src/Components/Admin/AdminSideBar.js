import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";

const AdminSideBar = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link>
                <Link to="/admin/orders" style={{textDecoration: "auto"}}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">All of orders</div>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/admin/products" style={{textDecoration: "auto"}}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">All of products</div>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/admin/brands/create" style={{textDecoration: "auto"}}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Add new brands</div>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/admin/categories/create" style={{textDecoration: "auto"}}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Add new category</div>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/admin/subcategories/create" style={{textDecoration: "auto"}}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Add new subcategory
                    </div>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/admin/products/create" style={{textDecoration: "auto"}}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Add new product</div>
                </Link>
            </Nav.Link>
            <Nav.Link> <Link to="/admin/coupons/create" style={{textDecoration: "auto"}}>
                <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Add new coupon</div>
            </Link>
            </Nav.Link>
        </Nav>
    )
}
export default AdminSideBar