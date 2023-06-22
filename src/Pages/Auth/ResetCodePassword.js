import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import {RestPasswordUser} from "../../Controllers/AuthController";
import React from "react";

const RestPassword = () => {
    const {data, handlerOnChangeInput, handleSubmit, isPress, errors} = RestPasswordUser()
    return (
        <Container style={{minHeight: "450px"}}>
            <Row className="justify-content-md-center mt-5">
                <Col md={8} sm={12} xl={6} xs={12}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center text-primary">Change Password</h2>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="newPassword"
                                className={errors.some(error => error.param === "newPassword") && 'is-invalid'}
                                style={{textAlign: "center"}}
                                placeholder="○○○○○○○○○○"
                                onChange={handlerOnChangeInput} value={data.newPassword}
                            />
                            {errors.some(error => error.param === "newPassword") &&
                                <Form.Text className="text-danger">
                                    {errors.find(error => error.param === "newPassword").msg}
                                </Form.Text>
                            }
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="newPasswordConfirm"
                                className={errors.some(error => error.param === "newPasswordConfirm") && 'is-invalid'}
                                style={{textAlign: "center"}}
                                placeholder="○○○○○○○○○○"
                                onChange={handlerOnChangeInput} value={data.newPasswordConfirm}
                            />
                            {errors.some(error => error.param === "newPasswordConfirm") &&
                                <Form.Text className="text-danger">
                                    {errors.find(error => error.param === "newPasswordConfirm").msg}
                                </Form.Text>
                            }
                        </Form.Group>

                        <div className="text-center">
                            <Button
                                variant="outline-primary"
                                type="submit"
                                className="mt-3"
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
    )
}
export default RestPassword