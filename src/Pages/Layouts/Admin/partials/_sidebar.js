import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Folder2 } from "react-bootstrap-icons";

const SideBar = () => {
    const location = useLocation();

    const isActive = (name) => {
        return location.pathname.trimStart() === `/admin/${name}` ? "active" : "";
    };

    const renderNavLink = (name, label) => (
        <li className={`nav-item ${isActive(name)}`}>
            <a className="nav-link" data-toggle="collapse" href={`#${name}`} role="button"
               aria-expanded="false" aria-controls={name}>
                <Folder2 size={16} />
                <span className="link-title">{label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                     strokeLinejoin="round" className="feather feather-chevron-down link-arrow">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </a>
            <div className="collapse show" id={name}>
                <ul className="nav sub-menu">
                    <li className="nav-item">
                        <Link to={`/admin/${name}`} className="nav-link">Index</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/admin/${name}/create`} className="nav-link">Create</Link>
                    </li>
                </ul>
            </div>
        </li>
    );

    return (
        <>
            <nav className="sidebar">
                {/* ... Sidebar Header ... */}
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
                                <Folder2 size={16} />
                                <span className="link-title">Orders</span>
                            </Link>
                        </li>
                        <li className={`nav-item ${isActive("coupons/create")}`}>
                            <Link className="nav-link" data-toggle="collapse" to="/admin/coupons/create" role="button"
                                  aria-expanded="false" aria-controls="coupons">
                                <Folder2 size={16} />
                                <span className="link-title">Coupons</span>
                            </Link>
                        </li>
                    </ul>
                    {/* ... Scrollbars ... */}
                </div>
            </nav>
            <nav className="settings-sidebar">
                {/* ... Settings Sidebar ... */}
            </nav>
        </>
    );
};

export default SideBar;
