import {Form, Button, Container, Row, Col, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import {SignupUser} from "../../Controllers/AuthController";
import React from "react";

const Register = () => {
    const {data,handleSubmit, handlerOnChangeInput,isPress} = SignupUser()
    return (
        <Container style={{minHeight: "450px"}}>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={8} sm={12} xl={6}>
                    <h2 className="text-center mb-4">Register</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={data.name}
                                placeholder="Enter your name"
                                required
                                onChange={handlerOnChangeInput}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={data.email}
                                placeholder="Enter email"
                                required
                                onChange={handlerOnChangeInput}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={data.password}
                                placeholder="Password"
                                required
                                onChange={handlerOnChangeInput}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="passwordConfirm"
                                value={data.passwordConfirm}
                                placeholder="Confirm Password"
                                required
                                onChange={handlerOnChangeInput}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me"/>
                        </Form.Group>

                        <Button variant="outline-primary" type="submit" className="pt-2">
                            Register  {isPress && (<Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />)}
                        </Button>
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
