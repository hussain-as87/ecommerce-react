import React from "react";
import {Container, Navbar, Nav, FormControl, NavDropdown} from "react-bootstrap";
import logo from "../../assets/images/logo.png"
import login from "../../assets/images/login.png"
import cart from "../../assets/images/cart.png"
import {useEffect, useState} from "react";
import {GetLoggedUser} from "../../Controllers/UserController";

const NavbarSection = ({index}) => {
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
    return (
        <>
            <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
                <Container>
                    <Navbar.Brand>
                        <a href="/">
                            <img src={logo} className="logo" alt="sdfsdf" width={50}/>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <FormControl
                            type="search"
                            placeholder="Search for something... 🔍"
                            className="me-2 w-100 text-center beautiful-input"
                            aria-label="Search"
                            value={keyword}
                            onChange={onChangeKeyWord}
                            onFocus={(e) => e.target.classList.add('focus')}
                            onBlur={(e) => e.target.classList.remove('focus')}
                        />
                        <Nav className="me-auto">
                            {userData.name ? (
                                <NavDropdown title={userData.name} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item>
                                    {userData.role === "admin" && <NavDropdown.Item href="/admin/products">Control
                                        Panel</NavDropdown.Item> }
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item onClick={logout} className="text-danger">
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Nav.Link
                                    href="/login"
                                    className="nav-text d-flex mt-3 justify-content-center"
                                >
                                    <img src={login} className="login-img" alt="sfvs" width={20} height={20}/>
                                    <p style={{color: "white"}}>
                                        Login
                                    </p>
                                </Nav.Link>
                            )}

                            <Nav.Link
                                href="/cart"
                                className="nav-text d-flex mt-3 justify-content-center"
                                style={{color: "white"}}
                            >
                                <img src={cart} className="login-img" alt="sfvs" width={20} height={20}/>
                                <p style={{color: "white"}}>cart</p>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarSection;

