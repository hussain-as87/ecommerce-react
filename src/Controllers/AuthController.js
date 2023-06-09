import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    forgetPasswordAction,
    loginAction,
    restPasswordAction,
    signupAction,
    verifyRestPasswordAction,
} from "../Redux/Actions/AuthAction";
import use_notification from "./use_notification";
import {useNavigate} from "react-router-dom";

/**
 * @description  signup
 */
export const SignupUser = () => {
    const dispatch = useDispatch();
    const [isPress, setIsPress] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });
    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleClassNameChange = (event) => {
        const {name} = event.target;
        const element = event.target;

        // Modify the className based on the name
        if (errors.some((error) => error.param === name)) {
            element.classList.add(" is-invalid");
        } else {
            element.classList.remove(" is-invalid");
        }
    };
    const {signup, loading, signup_error: error} = useSelector(
        (state) => state.auth
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setIsPress(true);
            dispatch(signupAction(data));
        } catch (error) {
            console.log(error.message); // Other types of errors
            use_notification("Have an error!", "error");
        }
    };
    useEffect(() => {
        if (error?.data?.errors) {
            setErrors(error.data.errors); //set errors with response data
            setIsPress(false);
        }
        if (!loading) {
            setIsPress(false);
            if (signup.status === 201) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                localStorage.setItem("token", signup.data.token);
                localStorage.setItem("user", JSON.stringify(signup.data.data));
                setData({
                    name: "",
                    email: "",
                    password: "",
                    passwordConfirm: "",
                });
                return navigate("/", {replace: true});
            }
        }
    }, [error.data.errors, loading, navigate, signup.data.data, signup.data.token, signup.status]);
    return {handleSubmit, data, handlerOnChangeInput, isPress, errors};
};
/**
 * @description  login
 */
export const LoginUser = () => {
    const dispatch = useDispatch();
    const [isPress, setIsPress] = useState(false);
    const [errors, setErrors] = useState([]);
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const {login, loading, login_error: error} = useSelector(
        (state) => state.auth
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setIsPress(true);
            dispatch(loginAction(data));
        } catch (error) {
            use_notification("Have an error!", "error");
            console.log(error);
        }
    }
    useEffect(() => {
        if (error?.data?.errors) {
            setErrors(error.data.errors); //set errors with response data
            setIsPress(false);
        }
        if (!loading) {
            setIsPress(false);
            if (login.status === 200) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                localStorage.setItem("token", login.data.token);
                localStorage.setItem("user", JSON.stringify(login.data.data));
                setData({
                    email: "",
                    password: "",
                });
                return window.location.pathname = "/";
            }
        }
    }, [loading, login, error]);
    return {handleSubmit, data, handlerOnChangeInput, isPress, errors};
};
/**
 * @description  forget password
 */
export const ForgetPasswordUser = () => {
    const dispatch = useDispatch();
    const [isPress, setIsPress] = useState(false);
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
    });
    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target;
        setData({
            [name]: value,
        });
    };
    const {forgetPassword, loading, forgetPassword_error: error} = useSelector(
        (state) => state.auth
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setIsPress(true);
            dispatch(forgetPasswordAction(data));
        } catch (error) {
            use_notification("Have an error!", "error");
            console.log(error);
        }
    };

    useEffect(() => {
        if (error?.data?.errors) {
            setErrors(error.data.errors); //set errors with response data
            setIsPress(false);
        }
        if (!loading) {
            setIsPress(false);
            if (forgetPassword.status === 200) {
                localStorage.setItem("email", data.email);
                setData({
                    email: "",
                });
                use_notification("the code has sent to your email!", "success");
                return navigate("/verifyResetPassword");
            }
        }
    }, [data.email, error.data.errors, forgetPassword.status, loading, navigate]);
    return {handleSubmit, data, handlerOnChangeInput, isPress, errors};
};

/**
 * @description  verify reset code
 */
export const VerifyRestPasswordUser = () => {
    const dispatch = useDispatch();
    const [isPress, setIsPress] = useState(false);
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();
    const [data, setData] = useState({
        resetCode: "",
    });
    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target;
        setData({
            [name]: value,
        });
    };
    const {verifyRestPassword, loading, verifyRestPassword_error: error} =
        useSelector((state) => state.auth);
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setIsPress(true);
            dispatch(verifyRestPasswordAction(data));
        } catch (error) {
            use_notification("Have an error!", "error");
            console.log(error);
        }
    };

    useEffect(() => {
        if (error?.data?.errors) {
            setErrors(error.data.errors); //set errors with response data
            setIsPress(false);
        }
        if (!loading) {
            setIsPress(false);
            if (verifyRestPassword.status === 200) {
                setData({
                    resetCode: "",
                });
                use_notification("the code has verified!", "success");
                return navigate("/resetPassword");
            }
        }
    }, [error.data.errors, loading, navigate, verifyRestPassword.status]);
    return {handleSubmit, data, handlerOnChangeInput, isPress, errors};
};

/**
 * @description  reset password
 */
export const RestPasswordUser = () => {
    const dispatch = useDispatch();
    const [isPress, setIsPress] = useState(false);
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        newPassword: "",
        newPasswordConfirm: "",
    });
    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
            email: localStorage.getItem("email"),
        }));
    };
    const {restPassword, loading, restPassword_error: error} = useSelector(
        (state) => state.auth
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setIsPress(true);
            dispatch(restPasswordAction(data));
        } catch (error) {
            use_notification("Have an error!", "error");
            console.log(error);
        }
    };

    useEffect(() => {
        if (error?.data?.errors) {
            setErrors(error.data.errors); //set errors with response data
            setIsPress(false);
        }
        if (!loading) {
            setIsPress(false);
            if (restPassword.status === 200) {
                localStorage.removeItem("email");
                localStorage.setItem("token", restPassword.data.token);
                setData({
                    email: "",
                    newPassword: "",
                    newPasswordConfirm: "",
                });
                use_notification("the password has changed successfully!", "success");
                return navigate("/");
            }
        }
    }, [loading, restPassword, error, navigate]);
    return {handleSubmit, data, handlerOnChangeInput, isPress, errors};
};

/**
 * @description protected routes
 */
export const ProtectedAuthRoute = () => {
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")))
    const [isUser, setIsUser] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        if (userData != null) {
            if (userData.role === "user") {
                setIsUser(true)
                setIsAdmin(false)
            } else {
                setIsUser(false)
                setIsAdmin(true)
            }
        } else {
            setIsAdmin(false)
            setIsUser(false)
        }
    }, [userData])



    return [isUser, isAdmin, userData]
};
