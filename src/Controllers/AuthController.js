import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import use_notification from "./use_notification";
import {
    forgetPasswordAction,
    loginAction,
    restPasswordAction,
    signupAction,
    verifyRestPasswordAction,
} from "../Redux/Actions/AuthAction";

const handleLocalStorage = (token, user) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
};
const useAuth = (action, response, initialState, successMessage) => {
    const dispatch = useDispatch();
    const [isPress, setIsPress] = useState(false);
    const [errors, setErrors] = useState([]);
    const [data, setData] = useState(initialState);
    const {loading, error} = useSelector((state) => state.auth);

    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setIsPress(true);
            dispatch(action(data));
        } catch (error) {
            console.log(error.message); // Other types of errors
            use_notification("Have an error!", "error");
        }
    };
    useEffect(() => {
        if (error?.data?.errors) {
            setErrors(error.data.errors); // set errors with response data
            setIsPress(false);
        }
        if (!loading) {
            setIsPress(false);
            if (response.status === 201 || response.status === 200) {
                setData(initialState);
                return successMessage()
            }
        }
    }, [error?.data?.errors, loading, response, initialState, successMessage]);

    return {handleSubmit, data, handlerOnChangeInput, isPress, errors};
};

/**
 * @description  signup
 */
export const SignupUser = () => {
    const navigate = useNavigate();

    const initialState = {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
    };
    const response = useSelector((state) => state.auth.signup);
    const successMessage = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        handleLocalStorage(response.data.token)
        navigate("/");
    }
    return useAuth(signupAction, response, initialState, successMessage);
};

/**
 * @description  login
 */
export const LoginUser = () => {
    const navigate = useNavigate();
    const initialState = {
        email: "",
        password: "",
    };
    const response = useSelector((state) => state.auth.login);
    const successMessage = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data));

        navigate("/");
    }
    return useAuth(loginAction, response, initialState, successMessage);
};

/**
 * @description  forget password
 */
export const ForgetPasswordUser = () => {
    const navigate = useNavigate();
    const initialState = {
        email: "",
    };
    const response = useSelector((state) => state.auth.forgetPassword);
    const successMessage = () => {
        localStorage.setItem("email", response.email);
        localStorage.setItem("previousStepAuth", "forgetPassword");
        use_notification("the code has sent to your email!", "success");
        navigate("/verifyResetPassword");
    }
    return useAuth(forgetPasswordAction, response, initialState, successMessage);
};

/**
 * @description  verify reset code
 */
export const VerifyRestPasswordUser = () => {
    const navigate = useNavigate();
    const initialState = {
        resetCode: "",
    };
    const response = useSelector((state) => state.auth.verifyRestPassword);
    const successMessage = () => {
        localStorage.setItem("previousStepAuth", "verifyResetPassword");
        use_notification("the code has verified!", "success");
        navigate("/resetPassword");
    }
    return useAuth(verifyRestPasswordAction, response, initialState, successMessage);
};

/**
 * @description  reset password
 */
export const RestPasswordUser = () => {
    const navigate = useNavigate();
    const initialState = {
        email: "",
        newPassword: "",
        newPasswordConfirm: "",
    };
    const response = useSelector((state) => state.auth.restPassword);
    const successMessage = () => {
        localStorage.removeItem("email");
        localStorage.setItem("token", response.data.token);
        use_notification("the password has changed successfully!", "success");
        navigate("/");
    }
    return useAuth(restPasswordAction, response, initialState, successMessage);
};


