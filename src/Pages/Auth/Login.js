import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LoginUser} from "../../Controllers/AuthController";
import React from "react";

const Login = () => {
    const {data, handlerOnChangeInput, handleSubmit, isPress, errors} = LoginUser()
    return (
        <Container style={{minHeight: "450px"}}>
            <Row className="justify-content-md-center mt-5">
                <Col md={8} sm={12} xl={6} xs={12}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center text-primary">Log In</h2>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="example@name.com"
                                name="email"
                                className={errors.some(error => error.param === "email") && 'is-invalid'}
                                onChange={handlerOnChangeInput}
                                value={data.email}
                                style={{textAlign: "center"}}
                            />
                            {errors.some(error => error.param === "email") &&
                                <Form.Text className="text-danger">
                                    {errors.find(error => error.param === "email").msg}
                                </Form.Text>
                            }
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                          placeholder="○○○○○○○○○○"
                                          name="password"
                                          className={errors.some(error => error.param === "password") && 'is-invalid'}
                                          style={{textAlign: "center"}} onChange={handlerOnChangeInput}
                                          value={data.password}
                            />
                            {errors.some(error => error.param === "password") &&
                                <Form.Text className="text-danger">
                                    {errors.find(error => error.param === "password").msg}
                                </Form.Text>
                            }
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
                                Login {isPress &&
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />}
                            </Button><br/>
                            <label className="mx-auto my-4">
                                <a href="/forgotPassword" style={{textDecoration: 'none'}}>
                                    <span style={{cursor: "pointer"}}
                                          className="text-primary">forget the password?</span>
                                </a>
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