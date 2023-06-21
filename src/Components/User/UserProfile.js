import React from 'react';
import {Row, Col, Spinner, Form, Button} from 'react-bootstrap';
import {GetLoggedUser} from '../../Controllers/UserController';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const UserProfile = () => {
    const {user, loading} = GetLoggedUser();

    return (
        <div>
            <h2 className="admin-content-text">Profile</h2>

            {!loading ? (
                user && (
                    <div className="user-address-card my-3 px-2">
                        <Row className="d-flex justify-content-between pt-2">
                            <Col xs={12} className="d-flex">
                                    <div className="p-2">Name:</div>
                                <div className="p-1 item-delete-edit">{user.data.name}{''}  <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></div>
                            </Col>
                            <Col xs={12} className="d-flex">
                                <div className="p-2">Phone number:</div>
                                <div className="p-1 item-delete-edit">
                                    {user.data.phone || 'No Phone Number'}
                                </div>
                            </Col>
                            <Col xs={12} className="d-flex">
                                <div className="p-2">Email-Address:</div>
                                <div className="p-1 item-delete-edit">{user.data.email}</div>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col xs={10} sm={8} md={8} className="mx-auto">
                                <h2 className="text-center text-dark">Change Password</h2>
                                <hr/>
                                <Form>
                                    <Form.Group className="text-center">
                                        <Form.Label>Old Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="currentPassword"
                                            placeholder="○○○○○○○○○"
                                            style={{textAlign: 'center'}}
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
                                        />
                                        <Form.Text></Form.Text>
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button
                                            variant="outline-primary"
                                            type="submit"
                                            className="mt-3"
                                        >
                                            {/* {isPress ? (
                                                <Spinner
                                                    as="span"
                                                    animation="border"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                "*/}Submit
                                            {/*" )}*/}
                                        </Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                )
            ) : (
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
            )}
        </div>
    );
};

export default UserProfile;
