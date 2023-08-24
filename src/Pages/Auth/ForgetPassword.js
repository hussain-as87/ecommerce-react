import React from "react";
import { Button, Col, Container, FloatingLabel, Form, Row, Spinner } from "react-bootstrap";
import { ForgetPasswordUser } from "../../Controllers/AuthController";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
    const { data, handlerOnChangeInput, handleSubmit, isPress, errors } = ForgetPasswordUser();

    return (
        <Container style={{ minHeight: "450px", paddingBottom: '50px' }} className="pt-5">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="contact__text">
                        <div className="section-title">
                            <h2>Confirm Email Address</h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <br />

                    <div className="contact__form">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        className={errors.some(error => error.param === "email") && 'is-invalid'}
                                        onChange={handlerOnChangeInput}
                                        value={data.email}
                                    />
                                </div>
                                <div className="col-lg-12">
                                    <button type="submit" className="site-btn">
                                        Submit {isPress &&
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                    }
                                    </button>
                                </div>
                                <label className="mx-auto my-4">
                                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                                        <span style={{ cursor: "pointer" }} className="text-warning">Sign Up</span>
                                    </Link>
                                    <Link to="/login" style={{ textDecoration: 'none' }}>
                                        <span style={{ cursor: "pointer" }} className="text-primary mx-3">Sign In</span>
                                    </Link>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ForgetPassword;
