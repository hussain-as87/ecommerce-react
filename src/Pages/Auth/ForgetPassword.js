import React from "react";
import {Button, Col, Container, FloatingLabel, Form, Row, Spinner} from "react-bootstrap";
import {ForgetPasswordUser} from "../../Controllers/AuthController";
import {Link} from "react-router-dom";

const ForgetPassword = () => {
    const {data, handlerOnChangeInput, handleSubmit, isPress, errors} = ForgetPasswordUser();

    return (
        <Container style={{minHeight: "450px"}}>
            <Row className="justify-content-md-center mt-5">
                <Col md={8} sm={12} xl={6} xs={12}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center text-danger">Confirm Email Address</h2>
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

                        <div className="text-center">
                            <Button
                                variant="outline-primary"
                                type="submit"
                                className="mt-3"
                                disabled={isPress}
                            >
                                Submit {isPress &&
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                            }
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
            <br/>
            <br/>
            <label className="mx-auto my-4">
                <Link to="/singup" style={{textDecoration: 'none'}}>
                    <span style={{cursor: "pointer"}} className="text-danger">Create an account</span>
                </Link>

                <Link to="/login" style={{textDecoration: 'none'}}>
                    <span style={{cursor: "pointer"}} className="text-danger mx-3">Login</span>
                </Link>
            </label>
        </Container>
    );
};

export default ForgetPassword;
