import { Button, Card, Col, Container, FloatingLabel, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SignupUser } from "../../Controllers/AuthController";
import React from "react";
import logo from "../../assets/images/about-us.jpg";

const Register = () => {
    const { data, handlerOnChangeInput, handleSubmit, isPress, errors } = SignupUser();

    return (
        <Container style={{ minHeight: "450px", paddingBottom: '50px' }} className="pt-5">
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <div className="contact__text">
                        <div className="section-title">
                            <h2>Sign Up</h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8">
                    <br />

                    <div className="contact__form">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        className={errors.some(error => error.param === "name") && 'is-invalid'}
                                        onChange={handlerOnChangeInput}
                                        value={data.name}
                                    />
                                </div>
                                <div className="col-lg-6">
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
                                <div className="col-lg-6">
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        className={errors.some(error => error.param === "password") && 'is-invalid'}
                                        onChange={handlerOnChangeInput}
                                        value={data.password}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <input
                                        id="passwordConfirm"
                                        type="password"
                                        name="passwordConfirm"
                                        className={errors.some(error => error.param === "passwordConfirm") && 'is-invalid'}
                                        value={data.passwordConfirm}
                                        placeholder="Password Confirm"
                                        onChange={handlerOnChangeInput}
                                    />
                                </div>
                                <div className="col-lg-12">
                                    <button type="submit" className="site-btn">
                                        Sign Up
                                    </button>
                                </div>
                                <label className="mx-auto my-4">
                                    already have an account?{" "}
                                    <Link to="/login" style={{ textDecoration: 'none' }}>
                                        <span style={{ cursor: "pointer" }} className="text-warning">click here</span>
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

export default Register;
