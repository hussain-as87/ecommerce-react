import React from "react";
import {Container, Navbar, Nav, FormControl, NavDropdown, Badge} from "react-bootstrap";
import logo from "../../assets/images/logo.png"
import login from "../../assets/images/login.png"
import {useEffect, useState} from "react";
import {GetLoggedUser} from "../../Controllers/UserController";
import {
    BoxArrowLeft,
    Cart,
    Person,
    Sliders2Vertical
} from "react-bootstrap-icons";
import {GetCartItems} from "../../Controllers/CartController";

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
    const {itemsCount} = GetCartItems()


    return (
        <>
            <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
                <Container>
                    <Navbar.Brand>
                        <a href="/">
                            <img src={logo} className="logo" alt="sdfsdf" width={100}/>
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
                            {userData.name ? (<>
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${userData.name}&bold=true&rounded=true&background=random&size=100`}
                                        className="login-img" alt="sfvs" style={{width: '38px', height: '62px'}}/>
                                    <NavDropdown title={userData.name} id="basic-nav-dropdown">
                                        <NavDropdown.Item href={`/${userData.role}/profile`}><Person
                                            size={25}/> Profile</NavDropdown.Item>
                                        {userData.role === "admin" && <NavDropdown.Item href="/admin/products"><Sliders2Vertical size={25}/> Control
                                            Panel</NavDropdown.Item>}
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item onClick={logout} className="text-danger">
                                            <BoxArrowLeft size={25}/>  Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            ) : (
                                <Nav.Link
                                    href="/login"
                                    className="nav-text d-flex mt-3 justify-content-center"
                                > <img src={login} className="login-img" alt="sfvs"/>

                                    <p style={{color: "white"}}>
                                        Login
                                    </p>
                                </Nav.Link>
                            )}

                            <Nav.Link href="/cart" className="nav-text d-flex mt-3 justify-content-center"
                                      style={{color: 'white'}}>
                                <div style={{position: 'relative'}}>
                                    <Cart size={27} style={{marginTop: '-10px'}}/>

                                    {(itemsCount>=1 && userData.role==="user") && (<Badge pill bg="danger" className="text-center" style={{
                                        position: 'absolute',
                                        top: '-8px',
                                        right: '-8px',
                                        width: '20px',
                                        height: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginTop: '-10px'
                                    }}>   {itemsCount}
                                    </Badge>)}
                                </div>
                                <p style={{color: 'white', marginLeft: '5px'}}></p>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
        ;
};

export default NavbarSection;

