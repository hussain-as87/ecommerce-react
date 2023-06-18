import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LoginUser} from "../../Controllers/AuthController";
import React from "react";

const Login = () => {
    const {data, handlerOnChangeInput, handleSubmit, isPress} = LoginUser()
    return (
        <Container style={{minHeight: "450px"}}>
            <Row className="justify-content-md-center mt-5">
                <Col md={8} sm={12} xl={6} xs={12}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center">Log In</h2>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email"
                                          onChange={handlerOnChangeInput} value={data.email}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password"
                                          onChange={handlerOnChangeInput} value={data.password}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me"/>
                        </Form.Group>

                        <Button variant="outline-primary" type="submit" block>
                            Log In   {isPress && (<Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />)}
                        </Button>
                    </Form>
                    <label className="mx-auto my-4">
                        create a new account?{" "}
                        <Link to="/register" style={{textDecoration: 'none'}}>
                            <span style={{cursor: "pointer"}} className="text-danger">click here</span>
                        </Link>
                    </label>
                </Col>
            </Row>
            <br/>
            <br/>
            <label className="mx-auto my-4">
                <Link to="/admin/products" style={{textDecoration: 'none'}}>
                    <span style={{cursor: "pointer"}} className="text-danger">login as admin</span>
                </Link>

                <Link to="/user/orders" style={{textDecoration: 'none'}}>
                    <span style={{cursor: "pointer"}} className="text-danger mx-3">login as user</span>
                </Link>
            </label>
        </Container>
    )
}
export default Login