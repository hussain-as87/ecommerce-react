import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import {VerifyRestPasswordUser} from "../../Controllers/AuthController";
import React from "react";
import {Link} from "react-router-dom";

const VerifyRestPassword = () => {
    const {data, handlerOnChangeInput, handleSubmit, isPress, errors} = VerifyRestPasswordUser()
    return (
        <Container style={{minHeight: "450px"}}>
            <Row className="justify-content-md-center mt-5">
                <Col md={8} sm={12} xl={6} xs={12}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="text-center text-primary">Verify The Reset Code</h2>
                        <Form.Group controlId="formBasicCode">
                            {/* <Form.Label>Reset Code</Form.Label>*/}
                            <Form.Control
                                style={{textAlign: "center"}}
                                type="text"
                                placeholder="◉◉◉◉◉◉"
                                name="resetCode"
                                className={errors.some(error => error.param === "resetCode") && 'is-invalid'}
                                onChange={handlerOnChangeInput}
                                value={data.resetCode}
                                maxLength={6}
                                /* pattern="[0-9]{6}" required*/
                            />
                            {errors.some(error => error.param === "resetCode") &&
                                <Form.Text className="text-danger">
                                    {errors.find(error => error.param === "resetCode").msg}
                                </Form.Text>
                            }
                        </Form.Group>

                        <div className="text-center">
                            <Button
                                variant="outline-primary"
                                type="submit"
                                className="mt-3"
                            >
                                Continue {isPress &&
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
export default VerifyRestPassword