import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Folder2 } from "react-bootstrap-icons";

const SideBar = () => {
    const location = useLocation();

    const isActive = (name) => {
        return (location.pathname.trimStart() === `/admin/${name}` || location.pathname.trimStart() === `/admin/${name}/create`) ? "active" : "";
    };

    const renderNavLink = (name, label) => (
        <li className={`nav-item ${isActive(name)}`}>
            <a className="nav-link" data-toggle="collapse" href={`#${name}`} role="button"
               aria-expanded="false" aria-controls={name}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="feather feather-folder link-icon">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <span className="link-title">{label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                     stroke-linejoin="round" className="feather feather-chevron-down link-arrow">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </a>
            <div className="collapse" id={name}>
                <ul className="nav sub-menu">
                    <li className="nav-item">
                        <Link to={`/admin/${name}`}  className="nav-link">Index</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/admin/${name}/create`}  className="nav-link">Create</Link>
                    </li>
                </ul>
            </div>
        </li>

    );

    return (
        <>
            <nav className="sidebar">
                <div className="sidebar-header">
                    <a href="#" className="sidebar-brand">
                        HAS<span>SHOP</span>
                    </a>
                    <div className="sidebar-toggler active">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="sidebar-body ps ps--active-y">

                    <ul className="nav">
                        {/* ... Main Dashboard Link ... */}
                        <li className="nav-item nav-category">Sections</li>
                        {renderNavLink("brands", "Brand")}
                        {renderNavLink("banners", "Banner")}
                        {renderNavLink("categories", "Category")}
                        {renderNavLink("products", "Product")}
                        {renderNavLink("subcategories", "Subcategories")}
                        <li className={`nav-item ${isActive("orders")}`}>
                            <Link className="nav-link active" data-toggle="collapse" to="/admin/orders" role="button"
                                  aria-expanded="false" aria-controls="orders">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                     className="feather feather-folder link-icon">
                                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                </svg>
                                <span className="link-title">Orders</span>

                            </Link>
                        </li>
                        <li className={`nav-item ${isActive("coupons/create")}`}>
                            <Link className="nav-link" data-toggle="collapse" to="/admin/coupons/create" role="button"
                                  aria-expanded="false" aria-controls="coupons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                     className="feather feather-folder link-icon">
                                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                </svg>
                                <span className="link-title">Coupons</span>
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
            <nav className="settings-sidebar">
                {/* ... Settings Sidebar ... */}
            </nav>
        </>
    );
};

export default SideBar;/**/