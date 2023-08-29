import React from 'react';
import {Row, Col, Spinner, Form, Button, Card, Table, Container} from 'react-bootstrap';
import {ChangeUserPassword, GetLoggedUser} from '../../Controllers/UserController';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AdminBrands from "../Admin/Brands/AdminBrands";
import {Pencil, Pin} from "react-bootstrap-icons";
import {Link} from "react-router-dom";

const UserProfile = () => {
    const {handleSubmit, handlerOnChangeInput, isPress} = ChangeUserPassword()
    return (<div>
            <h2 className="text-center">Change Password</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <input
                            type="password"
                            id="currentPassword"
                            name="currentPassword"
                            placeholder="Current Password"
                            style={{textAlign: 'center'}}
                            onChange={handlerOnChangeInput}
                        />
                    </div>
                    <div className="col-lg-6">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="New Password"
                            style={{textAlign: 'center'}}
                            onChange={handlerOnChangeInput}
                        />
                    </div>
                    <div className="col-lg-12">
                        <input
                            type="password"
                            id="passwordConfirm"
                            name="passwordConfirm"
                            placeholder="Confirm New Password"
                            style={{textAlign: 'center'}}
                            onChange={handlerOnChangeInput}
                        />
                    </div>
                    <div className="col-lg-12 text-center">
                        <button
                            type="submit"
                            className="site-btn"
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
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserProfile;
