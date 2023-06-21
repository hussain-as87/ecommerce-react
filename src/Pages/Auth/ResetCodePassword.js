import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import {RestPasswordUser} from "../../Controllers/AuthController";
import React from "react";

const RestPassword = () => {
    const {data, handlerOnChangeInput, handleSubmit, isPress} = RestPasswordUser()
    return (
        <Container style={{minHeight: "450px"}}>
            <Row className="justify-content-md-center mt-5">
                <Col md={8} sm={12} xl={6} xs={12}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center text-primary">Change Password</h2>
                        <Form.Group controlId="formBasicPassword" className="text-center">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="newPassword"
                                style={{textAlign: "center"}}
                                required
                                placeholder="○○○○○○○○○○"
                                onChange={handlerOnChangeInput} value={data.newPassword}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail" className="text-center">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="newPasswordConfirm"
                                style={{textAlign: "center"}}
                                required
                                placeholder="○○○○○○○○○○"
                                onChange={handlerOnChangeInput} value={data.newPasswordConfirm}
                            />
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
                <Link to="/singup" style={{textDecoration: 'none'}}>
                    <span style={{cursor: "pointer"}} className="text-danger">Create an account</span>
                </Link>

                <Link to="/login" style={{textDecoration: 'none'}}>
                    <span style={{cursor: "pointer"}} className="text-danger mx-3">Login</span>
                </Link>
            </label>
        </Container>
    )
}
export default RestPassword