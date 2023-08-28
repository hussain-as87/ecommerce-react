import React, {useEffect} from "react";
import {Container, Spinner} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {RestPasswordUser} from "../../Controllers/AuthController";

const RestPassword = () => {
    const navigate = useNavigate();

    const {data, handlerOnChangeInput, handleSubmit, isPress, errors} = RestPasswordUser();
    useEffect(() => {
        if (localStorage.getItem("previousStepAuth") !== "verifyResetPassword") {
            navigate('/verifyResetPassword');
        }
    }, []);

    return (
        <Container style={{minHeight: "450px", paddingBottom: '50px'}} className="pt-5">
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <div className="contact__text">
                        <div className="section-title">
                            <h2>Change Password</h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8">
                    <br/>

                    <div className="contact__form">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <input
                                        id="newPassword"
                                        type="password"
                                        name="newPassword"
                                        className={errors.some(error => error.param === "newPassword") && 'is-invalid'}
                                        placeholder="New Password"
                                        onChange={handlerOnChangeInput}
                                        value={data.newPassword}
                                    />
                                    {errors.some(error => error.param === "newPassword") &&
                                        <span className="text-danger">
                                            {errors.find(error => error.param === "newPassword").msg}
                                        </span>
                                    }
                                </div>
                                <div className="col-lg-12">
                                    <input
                                        id="newPasswordConfirm"
                                        type="password"
                                        name="newPasswordConfirm"
                                        className={errors.some(error => error.param === "newPasswordConfirm") && 'is-invalid'}
                                        placeholder="Confirm New Password"
                                        onChange={handlerOnChangeInput}
                                        value={data.newPasswordConfirm}
                                    />
                                    {errors.some(error => error.param === "newPasswordConfirm") &&
                                        <span className="text-danger">
                                            {errors.find(error => error.param === "newPasswordConfirm").msg}
                                        </span>
                                    }
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
                                    <Link to="/signup" style={{textDecoration: 'none'}}>
                                        <span style={{cursor: "pointer"}}
                                              className="text-warning">Create an account</span>
                                    </Link>
                                    <Link to="/login" style={{textDecoration: 'none'}}>
                                        <span style={{cursor: "pointer"}} className="text-primary mx-3">Login</span>
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

export default RestPassword;
