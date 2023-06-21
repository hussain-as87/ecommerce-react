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
                        <h2 className="text-center text-primary">Log In</h2>
                        <Form.Group controlId="formBasicEmail" className="text-center">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="example@name.com"
                                name="email"
                                onChange={handlerOnChangeInput}
                                value={data.email}
                                style={{textAlign: "center"}}
                                required
                            />
                           {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>*/}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="text-center">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="○○○○○○○○○○" name="password"
                                          style={{textAlign: "center"}}   onChange={handlerOnChangeInput} value={data.password}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me"/>
                        </Form.Group>

                        <div className="text-center">
                            <Button
                                variant="outline-primary"
                                type="submit"
                                className="mt-3"
                                disabled={isPress}
                            >
                                {isPress ? (
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    "Login"
                                )}
                            </Button><br/>
                            <label className="mx-auto my-4">
                                <Link to="/forgotPassword" style={{textDecoration: 'none'}}>
                                    <span style={{cursor: "pointer"}} className="text-primary">forget the password?</span>
                                </Link>
                            </label>
                        </div>
                    </Form>
                    <label className="mx-auto my-4">
                        create a new account?{" "}
                        <Link to="/singup" style={{textDecoration: 'none'}}>
                            <span style={{cursor: "pointer"}} className="text-danger">click here</span>
                        </Link>
                    </label>
                </Col>
            </Row>

        </Container>
    )
}
export default Login