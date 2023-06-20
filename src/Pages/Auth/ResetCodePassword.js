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
                        <h2 className="text-center">Reset the password</h2>
                        <Form.Group controlId="formBasicEmail" className="text-center">
                            <Form.Label>New password</Form.Label>
                            <Form.Control
                                type="password"
                                name="newPassword"
                                style={{textAlign: "center"}}
                                required
                                placeholder="New password"
                                onChange={handlerOnChangeInput} value={data.newPassword}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail" className="text-center">
                            <Form.Label>Confirm</Form.Label>
                            <Form.Control
                                type="password"
                                name="newPasswordConfirm"
                                style={{textAlign: "center"}}
                                required
                                placeholder="Confirm new password"
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
        </Container>
    )
}
export default RestPassword