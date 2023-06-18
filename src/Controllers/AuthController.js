import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {signupAction} from "../Redux/Actions/AuthAction";
import use_notification from "./use_notification";

export const Signup = () => {
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
                use_notification("User created successfully!", "success")
            }
        }
    }, [loading,signup])
    return{handleSubmit,data,handlerOnChangeInput}
}