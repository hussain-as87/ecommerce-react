import {Button, Card, Col, Container, FloatingLabel, Form, Row, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LoginUser} from "../../Controllers/AuthController";
import React from "react";
import logo from "../../assets/images/about-us.jpg"
const Login = () => {
    const {data, handlerOnChangeInput, handleSubmit, isPress, errors} = LoginUser()
    return (
        <Container style={{minHeight: "450px",paddingBottom:'50px'}} className="pt-5">
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <div className="contact__text">
                        <div className="section-title">
                            <h2>Sign In</h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8">
                    <br/>

                    <div className="contact__form">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        className={errors.some(error => error.param === "email") && 'is-invalid'}
                                        onChange={handlerOnChangeInput}
                                        value={data.email}/>
                                </div>
                                <div className="col-lg-6">
                                    <input id="password"
                                           type="password"
                                           placeholder="Password"
                                           name="password"
                                           className={errors.some(error => error.param === "password") && 'is-invalid'}
                                           onChange={handlerOnChangeInput}
                                           value={data.password}/>


                                    <label className="mx-auto mb-4">
                                        <a href="/forgotPassword" style={{textDecoration: 'none'}}>
                                    <span style={{cursor: "pointer"}}
                                          className="text-primary">forget the password?</span>
                                        </a>
                                    </label>
                                </div>

                                <div className="col-lg-12">
                                    <button type="submit" className="site-btn">
                                        Sign In
                                    </button>
                                </div>
                                <label className="mx-auto my-4">
                                    create a new account?{" "}
                                    <Link to="/singup" style={{textDecoration: 'none'}}>
                                        <span style={{cursor: "pointer"}} className="text-warning">click here</span>
                                    </Link>
                                </label>
                            </div>
                        </form>

                    </div>
                </div>
            </div>



        </Container>
    )
}
export default Login