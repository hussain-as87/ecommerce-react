import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {loginAction, signupAction} from "../Redux/Actions/AuthAction";
import use_notification from "./use_notification";
import {useNavigate} from "react-router-dom";

export const SignupUser = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
    })
    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    const {signup, loading} = useSelector((state) => state.auth)
    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            dispatch(signupAction(data))
        } catch (error) {
            use_notification("Have an error!", "error")
            console.log(error)
        }
    }
    useEffect(() => {
        if (!loading) {
            if (signup.status === 201) {
                setData({
                    name: "",
                    email: "",
                    password: "",
                    passwordConfirm: "",
                })
                use_notification("Signup successfully!", "success")
            }
        }
    }, [loading, signup])
    return {handleSubmit, data, handlerOnChangeInput}
}
export const LoginUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    const {login, loading} = useSelector((state) => state.auth)
    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            dispatch(loginAction(data))
        } catch (error) {
            use_notification("Have an error!", "error")
            console.log(error)
        }
    }
    useEffect(() => {
        if (!loading) {
            if (login.status === 200) {
                setData({
                    email: "",
                    password: "",
                })
                navigate("/", {replace: true})
            }
        }
    }, [loading, login])
    return {handleSubmit, data, handlerOnChangeInput}
}