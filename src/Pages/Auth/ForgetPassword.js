import React from "react";
import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import {ForgetPasswordUser} from "../../Controllers/AuthController";
import {Link} from "react-router-dom";
const ForgetPassword = () => {
    const {data, handlerOnChangeInput, handleSubmit, isPress} = ForgetPasswordUser();

    return (
        <Container style={{minHeight: "450px"}}>
            <Row className="justify-content-md-center mt-5">
                <Col md={8} sm={12} xl={6} xs={12}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center text-primary">Confirm Email Address</h2>
                        <Form.Group controlId="formBasicEmail" className="text-center">
                           {/* <Form.Label>Email address</Form.Label>*/}
                            <Form.Control
                                type="email"
                                placeholder="example@name.com"
                                name="email"
                                onChange={handlerOnChangeInput}
                                value={data.email}
                                style={{textAlign: "center"}}
                                required
                            />
                            <Form.Text className="text-info">
                                enter your email address to check if it's exits and send the reset code for you.
                            </Form.Text>
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
                                    "Submit"
                                )}
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
            <br/>
            <br/>
            <label className="mx-auto my-4">
                <Link to="/admin/products" style={{textDecoration: 'none'}}>
                    <span style={{cursor: "pointer"}} className="text-danger">login as admin</span>
                </Link>

                <Link to="/login" style={{textDecoration: 'none'}}>
                    <span style={{cursor: "pointer"}} className="text-danger mx-3">login as user</span>
                </Link>
            </label>
        </Container>
    );
};

export default ForgetPassword;
