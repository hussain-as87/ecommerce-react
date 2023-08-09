import {Form, Button, Container, Row, Col, Spinner, FloatingLabel} from "react-bootstrap";
import {Link} from "react-router-dom";
import {SignupUser} from "../../Controllers/AuthController";
import React from "react";

const Register = () => {
    const {data, handleSubmit, handlerOnChangeInput, isPress, errors} = SignupUser()
    return (
        <Container style={{minHeight: "450px"}}>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={8} sm={12} xl={6}>
                    <h2 className="text-center mb-4 text-danger">Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicName">
                            <FloatingLabel controlId="name" label="Name">
                                <Form.Control
                                    id="name"
                                    type="text"
                                    name="name"
                                    className={errors.some(error => error.param === "name") && 'is-invalid'}
                                    value={data.name}
                                    placeholder="example name"
                                    onChange={handlerOnChangeInput}
                                    style={{textAlign: "center"}}
                                />
                                {errors.some(error => error.param === "name") &&
                                    <Form.Text className="text-danger">
                                        {errors.find(error => error.param === "name").msg}
                                    </Form.Text>
                                }
                            </FloatingLabel>
                        </Form.Group>
                        <br/>
                        <Form.Group controlId="formBasicEmail">
                            <FloatingLabel controlId="email" label="Email-Address">
                                <Form.Control
                                    id="email"
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
                            </FloatingLabel>

                        </Form.Group>
                        <br/>
                        <Form.Group controlId="formBasicPassword">
                            <FloatingLabel controlId="password" label="Password">
                                <Form.Control
                                    id="password"
                                    type="password"
                                    placeholder="○○○○○○○○○○"
                                    name="password"
                                    className={errors.some(error => error.param === "password") && 'is-invalid'}
                                    style={{textAlign: "center"}} onChange={handlerOnChangeInput}
                                    value={data.password}/>
                                {errors.some(error => error.param === "password") &&
                                    <Form.Text className="text-danger">
                                        {errors.find(error => error.param === "password").msg}
                                    </Form.Text>
                                }
                            </FloatingLabel>
                        </Form.Group>
                        <br/>
                        <Form.Group controlId="formBasicConfirmPassword">
                            <FloatingLabel controlId="passwordConfirm" label="Password Confirm">
                                <Form.Control
                                    id="passwordConfirm"
                                    type="password"
                                    name="passwordConfirm"
                                    className={errors.some(error => error.param === "passwordConfirm") && 'is-invalid'}
                                    value={data.passwordConfirm}
                                    placeholder="○○○○○○○○○○"
                                    onChange={handlerOnChangeInput} style={{textAlign: "center"}}
                                />
                                {errors.some(error => error.param === "passwordConfirm") &&
                                    <Form.Text className="text-danger">
                                        {errors.find(error => error.param === "passwordConfirm").msg}
                                    </Form.Text>
                                }
                            </FloatingLabel>
                        </Form.Group>
                        <br/>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me"/>
                        </Form.Group>

                        <div className="text-center">
                            <Button
                                variant="outline-primary"
                                type="submit"
                                className="mt-3"
                                /*disabled={isPress}*/
                            >
                                Signup {isPress &&
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />}
                            </Button>
                        </div>
                    </Form>
                    <label className="mx-auto my-4">
                        already have account?{" "}
                        <Link to="/login" style={{textDecoration: 'none'}}>
                            <span style={{cursor: "pointer"}} className="text-danger">click here</span>
                        </Link>
                    </label>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
