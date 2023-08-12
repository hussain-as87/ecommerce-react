import {FormControl, Modal, Nav, NavDropdown} from "react-bootstrap";
import {BoxArrowLeft, Person, UiRadiosGrid} from "react-bootstrap-icons";
import {Link, useLocation} from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import React, {useEffect, useState} from "react";
import {GetCartItems} from "../../../Controllers/CartController";
import {GetLoggedUser} from "../../../Controllers/UserController";

const Header = ({index}) => {
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [userData, setUserData] = useState({});
    const { keyword, onChangeKeyWord } = index;

    const location = useLocation(); // Get the current location object

    const { user } = GetLoggedUser();
    const { itemsCount } = GetCartItems();

    const storedUser = localStorage.getItem("user");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;

    useEffect(() => {
        setUserData(parsedUser || {});
    }, [parsedUser]);

    const isActive = (name) => {
        return location.pathname.trimStart() === `/${name}` ? "active" : "";
    };

    const handleSearchModal = () => {
        setIsSearchModalOpen(!isSearchModalOpen);
    };

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.reload();
    };


    return(
      <>
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
  )
}
export default Header