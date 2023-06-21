import {Form, Button, Container, Row, Col, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import {SignupUser} from "../../Controllers/AuthController";
import React from "react";

const Register = () => {
    const {data, handleSubmit, handlerOnChangeInput, isPress} = SignupUser()
    return (
        <Container style={{minHeight: "450px"}}>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={8} sm={12} xl={6}>
                    <h2 className="text-center mb-4 text-primary">Signup</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicName" className="text-center">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={data.name}
                                placeholder="example name"
                                required
                                onChange={handlerOnChangeInput}
                                style={{textAlign: "center"}}
                            />
                        </Form.Group>

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
                                          style={{textAlign: "center"}} onChange={handlerOnChangeInput}
                                          value={data.password}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicConfirmPassword" className="text-center">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="passwordConfirm"
                                value={data.passwordConfirm}
                                placeholder="○○○○○○○○○○"
                                required
                                onChange={handlerOnChangeInput} style={{textAlign: "center"}}
                            />
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
                                    "Signup"
                                )}
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
