import {Link} from "react-router-dom";

const AdminSideBar = () => {
    return (<div className="sidebar">
        <div className="d-flex flex-column">
            <Link to="/admin/orders" style={{textDecoration: "auto"}}>
                <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">All of orders</div>
            </Link>
            <Link to="/admin/products" style={{textDecoration: "auto"}}>
                <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">All of products</div>
            </Link>
            <Link to="/admin/brands/create" style={{textDecoration: "auto"}}>
                <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Add new brands</div>
            </Link>
            <Link to="/admin/categories/create" style={{textDecoration: "auto"}}>
                <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Add new category</div>
            </Link>
            <Link to="/admin/subcategories/create" style={{textDecoration: "auto"}}>
                <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Add new subcategory</div>
            </Link>
            <Link to="/admin/products/create" style={{textDecoration: "auto"}}>
                <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Add new product</div>
            </Link>
            <Link to="/admin/coupons/create" style={{textDecoration: "auto"}}>
                <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">Add new coupon</div>
            </Link>
            <Link to="/admin/coupons" style={{textDecoration: "auto"}}>
                <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">All of coupons</div>
            </Link>
        </div>
    </div>)
}
export default AdminSideBar