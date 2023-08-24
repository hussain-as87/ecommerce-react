import React from "react";
import { Button, Col, Container, FloatingLabel, Form, Row, Spinner } from "react-bootstrap";
import { VerifyRestPasswordUser } from "../../Controllers/AuthController";
import { Link } from "react-router-dom";

const VerifyRestPassword = () => {
    const { data, handlerOnChangeInput, handleSubmit, isPress, errors } = VerifyRestPasswordUser();

    return (
        <Container style={{ minHeight: "450px", paddingBottom: '50px' }} className="pt-5">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="contact__text">
                        <div className="section-title">
                            <h2>Verify The Reset Code</h2>
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
                                        id="resetCode"
                                        type="text"
                                        placeholder="Reset Code"
                                        name="resetCode"
                                        className={errors.some(error => error.param === "resetCode") && 'is-invalid'}
                                        onChange={handlerOnChangeInput}
                                        value={data.resetCode}
                                        maxLength={6}
                                    />
                                    {errors.some(error => error.param === "resetCode") &&
                                        <span className="text-danger">
                                            {errors.find(error => error.param === "resetCode").msg}
                                        </span>
                                    }
                                </div>
                                <div className="col-lg-12">
                                    <button type="submit" className="site-btn">
                                        Continue {isPress &&
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
                                        <span style={{ cursor: "pointer" }} className="text-warning">Create an account</span>
                                    </Link>
                                    <Link to="/login" style={{ textDecoration: 'none' }}>
                                        <span style={{ cursor: "pointer" }} className="text-primary mx-3">Login</span>
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

export default VerifyRestPassword;
