import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {ChangeUserPasswordAction, getLoggedUserAction} from "../Redux/Actions/UserAction";
import use_notification from "./use_notification";
import {useNavigate} from "react-router-dom";

export const GetLoggedUser = () => {
    const dispatch = useDispatch();
    const {user, loading} = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(getLoggedUserAction())
    }, [dispatch])

    return {user, loading}
}
export const ChangeUserPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isPress, setIsPress] = useState(false)
    const [data, setData] = useState({
        currentPassword: "",
        password: "",
        passwordConfirm: ""
    })
    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    const {changePassword, loading} = useSelector((state) => state.users)
    const {user} = GetLoggedUser()
    const handleSubmit = (event) => {
        event.preventDefault()
        try {
            setIsPress(true)
            dispatch(ChangeUserPasswordAction({id: user.data?._id, formData: data}))
        } catch (error) {
            console.log(error)
            use_notification("Have an error!", "error")
        }
    }
    useEffect(() => {
        if (!loading) {
            setIsPress(false)
            if (changePassword.status === 200) {
                setData({
                    currentPassword: "",
                    password: "",
                    passwordConfirm: ""
                })
                use_notification("the password has changed successfully!", "success")
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                return navigate('/login')
            }
        }
    }, [changePassword.status, loading])

    return {changePassword, loading, handleSubmit, handlerOnChangeInput, isPress}
}
