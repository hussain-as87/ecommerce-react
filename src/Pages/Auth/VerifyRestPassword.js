import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import {VerifyRestPasswordUser} from "../../Controllers/AuthController";
import React from "react";
import {Link} from "react-router-dom";

const VerifyRestPassword = () => {
    const {data, handlerOnChangeInput, handleSubmit, isPress} = VerifyRestPasswordUser()
    return (
        <Container style={{minHeight: "450px"}}>
            <Row className="justify-content-md-center mt-5">
                <Col md={8} sm={12} xl={6} xs={12}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center text-primary">Verify The Reset Code</h2>
                        <Form.Group controlId="formBasicEmail" className="text-center ">
                           {/* <Form.Label>Reset Code</Form.Label>*/}
                            <Form.Control
                                style={{textAlign: "center"}}
                                type="text"
                                placeholder="◉◉◉◉◉◉"
                                name="resetCode"
                                onChange={handlerOnChangeInput}
                                value={data.resetCode}
                                maxLength={6}
                                pattern="[0-9]{6}" required
                            />
                            <Form.Text className="text-info">
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
    )
}
export default VerifyRestPassword