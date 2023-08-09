import React, {useEffect, useState} from "react";
import {Button, Col, Container, FormControl, Modal, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import {Link, Outlet} from "react-router-dom";
import {GetLoggedUser} from "../../Controllers/UserController";
import {GetCartItems} from "../../Controllers/CartController";
import {GetProducts} from "../../Controllers/ProductController";
import {BoxArrowLeft, Person, UiRadiosGrid, X} from "react-bootstrap-icons";
import logo from "../../assets/images/logo.png"

const HomeLayout = ({children, index}) => {
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    const {keyword, onChangeKeyWord} = index;
    const {user} = GetLoggedUser()
    const [userData, setUserData] = useState({});
    const storedUser = localStorage.getItem("user");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null; // Check if storedUser exists
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.reload();
    };
    useEffect(() => {
        setUserData(parsedUser || {});
    }, [parsedUser]);
    const {itemsCount} = GetCartItems()
    const handleSearchModal = () => {
        setIsSearchModalOpen(!isSearchModalOpen);
    };
    const isActive = (name) => {
        return window.location.pathname.trimStart() === `/${name}` ? 'active' : '';
    };

    return (
        <>
            {/* Page Preloder */}
            <div id="preloder">
                <div className="loader"></div>
            </div>

            {/* Offcanvas Menu Begin */}
            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__option">
                    <div className="offcanvas__links">
                        {userData.name ? (<>
                                <img
                                    className="d-inline pr-1"
                                    src={`https://ui-avatars.com/api/?name=${userData.name}&bold=true&rounded=true&background=random&size=100`}
                                    alt="sfvs"
                                    style={{width: '27px', height: '20px'}}/>
                                <div className="d-inline pr-1 offcanvas__top__hover">
                                    <span>{userData.name} <i className="arrow_carrot-down"></i></span>
                                    <ul>
                                        <NavDropdown.Item
                                            href={`/${userData.role}/profile`}
                                            className="text-center"><Person
                                            size={20} className="text-warning"/> <span
                                            className="text-light">Profile</span> </NavDropdown.Item>
                                        {userData.role === "admin" &&
                                            <NavDropdown.Item href="/admin/products"
                                                              className="text-center"><UiRadiosGrid
                                                className="text-primary"
                                                size={20}/> <span className="text-light">Control
                                                                Panel</span> </NavDropdown.Item>}
                                        <NavDropdown.Item onClick={logout} className="text-center">
                                            <BoxArrowLeft size={20} className="text-danger"/> <span
                                            className="text-light">Sign Out</span>
                                        </NavDropdown.Item>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <Nav.Link
                                href="/login"
                            >
                                Sign in
                            </Nav.Link>
                        )}
                    </div>
                    <div className="offcanvas__top__hover">
                        <span>Usd <i className="arrow_carrot-down"></i></span>
                        <ul>
                            <li>USD</li>
                            <li>EUR</li>
                            <li>USD</li>
                        </ul>
                    </div>
                </div>
                <div className="offcanvas__nav__option">
                    <a className="search-switch" onClick={handleSearchModal}>
                        <img src="img/icon/search.png" alt=""/>
                    </a>
                    <a href="#"><img src="img/icon/heart.png" alt=""/></a>
                    <a href="#"><img src="img/icon/cart.png" alt=""/> <span>{itemsCount}</span></a>
                    <div className="price">$0.00</div>
                </div>
                <div id="mobile-menu-wrap"></div>
                <div className="offcanvas__text">
                    <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
            </div>
            {/* Offcanvas Menu End */}

            {/* Header Section Begin */}
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__left">
                                    <p>Free shipping, 30-day return or refund guarantee.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__right">
                                    <div className="header__top__links">
                                        {userData.name ? (<>
                                                <img
                                                    className="d-inline pr-1"
                                                    src={`https://ui-avatars.com/api/?name=${userData.name}&bold=true&rounded=true&background=random&size=100`}
                                                    alt="sfvs"
                                                    style={{width: '27px', height: '20px'}}/>
                                                <div className="d-inline pr-1 header__top__hover">
                                                    <span>{userData.name} <i className="arrow_carrot-down"></i></span>
                                                    <ul>
                                                        <NavDropdown.Item
                                                            href={`/${userData.role}/profile`}
                                                            className="text-center"><Person
                                                            size={20} className="text-warning"/> <span
                                                            className="text-dark">Profile</span> </NavDropdown.Item>
                                                        {userData.role === "admin" &&
                                                            <NavDropdown.Item href="/admin/products"
                                                                              className="text-center"><UiRadiosGrid
                                                                className="text-primary"
                                                                size={20}/> <span className="text-dark">Control
                                                                Panel</span> </NavDropdown.Item>}
                                                        <NavDropdown.Item onClick={logout} className="text-center">
                                                            <BoxArrowLeft size={20} className="text-danger"/> <span
                                                            className="text-dark">Sign Out</span>
                                                        </NavDropdown.Item>
                                                    </ul>
                                                </div>
                                            </>
                                        ) : (
                                            <Nav.Link
                                                href="/login"
                                            >
                                                Sign in
                                            </Nav.Link>
                                        )}
                                    </div>
                                    <div className="d-inline pe-1 header__top__hover">
                                        <span>Usd <i className="arrow_carrot-down"></i></span>
                                        <ul>
                                            <li>USD</li>
                                            <li>EUR</li>
                                            <li>USD</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="header__logo" style={{marginTop: '-42px'}}>
                                <Link to="/"><img src={logo} alt=""/></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <nav className="header__menu mobile-menu ">
                                <ul style={{ textDecoration: 'none'}}>
                                    <li className={isActive("")}><Link style={{ textDecoration: 'none'}} to="/">Home</Link></li>
                                    <li className={isActive('products')}><Link to="/products">Shop</Link></li>
                                    {/*<li><a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="./about.html">About Us</a></li>
                                            <li><a href="./shop-details.html">Shop Details</a></li>
                                            <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                            <li><a href="./checkout.html">Check Out</a></li>
                                            <li><a href="./blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>*/}
                                    <li className={isActive('categories')}><Link to="/categories">Categories</Link></li>
                                    <li className={isActive('brands')}><Link to="/brands">Brands</Link></li>
                                    <li className={isActive('contact')}><Link to="/contact">Contacts</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="header__nav__option">
                                <a className="search-switch" onClick={handleSearchModal}>
                                    <img src="img/icon/search.png" alt=""/>
                                </a> <a href="#"><img src="img/icon/heart.png" alt=""/></a>
                                <a href="#"><img src="img/icon/cart.png" alt=""/> <span>{itemsCount}</span></a>
                                <div className="price">$0.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open"><i className="fa fa-bars"></i></div>
                </div>
            </header>
            {/* Header Section End */}

            {/* Body Section */}
            {children}
            <Outlet/>
            {/* Body Section End*/}

            {/* Footer Section Begin */}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__about">
                                <div className="footer__logo">
                                    <a href="#"><img src={logo} alt=""/></a>
                                </div>
                                <p>The customer is at the heart of our unique business model, which includes design.</p>
                                <a href="#"><img src="img/payment.png" alt=""/></a>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                            <div className="footer__widget">
                                <h6>Shopping</h6>
                                <ul>
                                    <li><a href="#">Clothing Store</a></li>
                                    <li><a href="#">Trending Shoes</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Sale</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="footer__widget">
                                <h6>Shopping</h6>
                                <ul>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Payment Methods</a></li>
                                    <li><a href="#">Delivary</a></li>
                                    <li><a href="#">Return & Exchanges</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <h6>NewLetter</h6>
                                <div className="footer__newslatter">
                                    <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                                    <form action="#">
                                        <input type="text" placeholder="Your email"/>
                                        <button type="submit"><span className="icon_mail_alt"></span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="footer__copyright__text">
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                <p>Copyright ©
                                    <script>
                                        document.write(new Date().getFullYear());
                                    </script>2020
                                    All rights reserved | This template is made with <i className="fa fa-heart-o"
                                                                                        aria-hidden="true"></i> by <a
                                        href="https://colorlib.com" target="_blank">Colorlib</a>
                                </p>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Section End */}

            {/* Search Begin */}
            <Modal show={isSearchModalOpen} onHide={handleSearchModal} className="p-5">
                <Modal.Body className="py-4 bg-light">
                    <FormControl
                        style={{height: '100px', fontSize: '24px'}}
                        id="search-input"
                        type="search"
                        placeholder="Search here......"
                        className="me-2 w-100 text-center bg-light text-white m-0"
                        aria-label="Search"
                        value={keyword}
                        onChange={onChangeKeyWord}
                        onFocus={(e) => e.target.classList.add('focus')}
                        onBlur={(e) => e.target.classList.remove('focus')}
                    />
                </Modal.Body>
            </Modal>

            {/* Search End */}

        </>
    );
};

export default HomeLayout;
