import React from 'react';
import {Row, Col, Spinner, Form, Button, Card, Table, Container} from 'react-bootstrap';
import {ChangeUserPassword, GetLoggedUser} from '../../Controllers/UserController';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AdminBrands from "../Admin/Brands/AdminBrands";
import {Pencil, Pin} from "react-bootstrap-icons";

const AdminProfile = () => {
    const {user, loading} = GetLoggedUser();
    const {handleSubmit, handlerOnChangeInput, isPress} = ChangeUserPassword()
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title className="">Profile</Card.Title>
                    {!loading ? (
                        user?.data && (
                            <div>
                                <Row className="d-flex justify-content-between pt-2 text-center">
                                    <Col xs={12} className="d-block">
                                        <div className="p-2">Name: <b className="text-primary">{user.data.name}</b>{' '}<Pencil size={15}/></div>
                                        <div className="p-2">Phone number: <b className="text-primary">{user.data.phone || 'No Phone Number'}</b>
                                        </div>
                                        <div className="p-2">Email-Address: <b className="text-primary">{user.data.email}</b></div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={10} sm={8} md={8} className="mx-auto mt-4">
                                        <h2 className="text-center">Change Password</h2>
                                        <hr/>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="text-center">
                                                <Form.Label>Old Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="currentPassword"
                                                    placeholder="○○○○○○○○○"
                                                    style={{textAlign: 'center'}}
                                                    onChange={handlerOnChangeInput}
                                                />
                                                <Form.Text></Form.Text>
                                            </Form.Group>

                                            <Form.Group className="text-center">
                                                <Form.Label>New Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    placeholder="○○○○○○○○○"
                                                    style={{textAlign: 'center'}}
                                                    onChange={handlerOnChangeInput}
                                                />
                                                <Form.Text></Form.Text>
                                            </Form.Group>

                                            <Form.Group className="text-center">
                                                <Form.Label>Confirm New Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="passwordConfirm"
                                                    placeholder="○○○○○○○○○"
                                                    style={{textAlign: 'center'}}
                                                    onChange={handlerOnChangeInput}
                                                />
                                                <Form.Text></Form.Text>
                                            </Form.Group>
                                            <div className="text-center">
                                                <Button
                                                    variant="outline-primary"
                                                    type="submit"
                                                    className="mt-3"
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
                                                        "Submit")}
                                                </Button>
                                            </div>
                                        </Form>
                                    </Col>
                                </Row>
                            </div>
                        )
                    ) : (
                        <div className="text-center"><Spinner
                            animation="border"
                            variant="secondary"
                            style={{width: '100px', height: '100px'}}
                        />
                        </div>

                    )}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AdminProfile;
