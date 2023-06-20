import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getLoggedUserAction} from "../Redux/Actions/UserAction";

export const GetLoggedUser = () => {
    const dispatch = useDispatch();
    const {user, loading} = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(getLoggedUserAction())
    }, [dispatch])

    return {user, loading}
}
