import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {loginAction, signupAction} from "../Redux/Actions/AuthAction";
import use_notification from "./use_notification";
import {useNavigate} from "react-router-dom";

export const SignupUser = () => {
    const dispatch = useDispatch()
    const [isPress, setIsPress] = useState(false)
    const navigate = useNavigate()

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
            setIsPress(true)
            dispatch(signupAction(data))
        } catch (error) {
            use_notification("Have an error!", "error")
            console.log(error)
        }
    }
    useEffect(() => {
        if (!loading) {
            setIsPress(false)
            if (signup.status === 201) {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                localStorage.setItem('token', signup.data.token)
                localStorage.setItem('user', JSON.stringify(signup.data.data))
                setData({
                    name: "",
                    email: "",
                    password: "",
                    passwordConfirm: "",
                })
                return navigate("/", {replace: true})
            }
        }
    }, [loading, signup])
    return {handleSubmit, data, handlerOnChangeInput, isPress}
}
export const LoginUser = () => {
    const dispatch = useDispatch()
    const [isPress, setIsPress] = useState(false)
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
            setIsPress(true)
            dispatch(loginAction(data))
        } catch (error) {
            use_notification("Have an error!", "error")
            console.log(error)
        }
    }

    useEffect(() => {
        if (!loading) {
            setIsPress(false)
            if (login.status === 200) {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                localStorage.setItem('token', login.data.token)
                localStorage.setItem('user', JSON.stringify(login.data.data))
                setData({
                    email: "",
                    password: "",
                })
                return navigate("/", {replace: true})
            }
        }
    }, [loading, login])
    return {handleSubmit, data, handlerOnChangeInput, isPress}
}