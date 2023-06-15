import {Container, Navbar, Nav, FormControl} from "react-bootstrap";
import logo from "../../assets/images/logo.png"
import login from "../../assets/images/login.png"
import cart from "../../assets/images/cart.png"

const NavbarSection = ({index}) => {
    const {keyword, onChangeKeyWord} = index

    return (<>
        <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <a href='/'>
                        <img src={logo} className='logo' alt="sdfsdf" width={50}/>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        type="search"
                        placeholder="search here..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                        value={keyword}
                        onChange={onChangeKeyWord}
                    />
                    <Nav className="me-auto">
                        <Nav.Link href='/login'
                                  className="nav-text d-flex mt-3 justify-content-center">
                            <img src={login} className="login-img" alt="sfvs" width={20} height={20}/>
                            <p style={{color: "white"}}>login</p>
                        </Nav.Link>
                        <Nav.Link href='/cart'
                                  className="nav-text d-flex mt-3 justify-content-center"
                                  style={{color: "white"}}>
                            <img src={cart} className="login-img" alt="sfvs" width={20} height={20}/>
                            <p style={{color: "white"}}>cart</p>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)
}
export default NavbarSection