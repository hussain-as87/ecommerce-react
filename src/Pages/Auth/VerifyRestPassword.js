import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import {VerifyRestPasswordUser} from "../../Controllers/AuthController";
import React from "react";

const VerifyRestPassword = () => {
    const {data, handlerOnChangeInput, handleSubmit, isPress} = VerifyRestPasswordUser()
    return (
        <Container style={{minHeight: "450px"}}>
            <Row className="justify-content-md-center mt-5">
                <Col md={8} sm={12} xl={6} xs={12}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center">Verify the reset code</h2>
                        <Form.Group controlId="formBasicEmail" className="text-center">
                            <Form.Label>Reset code</Form.Label>
                            <Form.Control
                                style={{textAlign: "center"}}
                                type="text"
                                placeholder="Enter reset code"
                                name="resetCode"
                                onChange={handlerOnChangeInput}
                                value={data.resetCode}
                                maxLength={6}
                                pattern="[0-9]{6}" required
                            />
                            <Form.Text className="text-muted">
                                We'll never share your code with anyone else.
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
                                    "Continue"
                                )}
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default VerifyRestPassword