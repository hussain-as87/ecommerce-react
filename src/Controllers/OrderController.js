import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    getOrdersAction,
    getOrderAction,
    createOrderAction,
    updateOrderToPaidAction,
    updateOrderToDeliverAction,
    getOrderCheckoutSessionAction, destroyOrderAction
} from "../Redux/Actions/OrderAction";
import use_notification from "./use_notification";
import {confirmAlert} from "react-confirm-alert";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export const GetOrders = () => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1);
    const {orders, loading} = useSelector(state => state.orders)

    let pageCount = 0;
    if (orders.paginationResult)
        pageCount = orders.paginationResult.numberOfPages

    const getPage = async (page) => {
        await setPage(page)
    }
    useEffect(() => {
        dispatch(getOrdersAction())
    }, [dispatch])
    return {orders, loading, getPage, pageCount}
}
export const GetOrderDetailsAndStatus = (id) => {
    const dispatch = useDispatch()
    const [isCheckedD, setIsCheckedD] = useState(false);
    const [isCheckedP, setIsCheckedP] = useState(false);

    const {order, loading} = useSelector(state => state.orders)
    useEffect(() => {
        dispatch(getOrderAction(id))
        if (order?.data?.isPaid === true) {
            setIsCheckedP(true)
        }
        if (order?.data?.isDelivered === true) {
            setIsCheckedD(true)
        }
    }, [dispatch, id, order])
    const handleUpdateToPaid = async (event) => {
        event.preventDefault()
        setIsCheckedP(true)
        dispatch(updateOrderToPaidAction(id))
    }
    const handleUpdateToDeliver = async (event) => {
        event.preventDefault()
        setIsCheckedD(true)
        dispatch(updateOrderToDeliverAction(id))
    }

    return {order, loading, isCheckedD, isCheckedP, handleUpdateToPaid, handleUpdateToDeliver}
}
export const CreateOrder = (cartId) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const storedUser = localStorage.getItem("user");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    const [isCash, setIsCash] = useState(true)
    const {create, create_error} = useSelector(state => state.orders)
    const [data, setData] = useState({
        shippingAddress: {
            firstName:"",
            lastName:"",
            email:"",
            details: "",
            phone: "",
            city: "",
            country:"",
            postalCode: "",
            notes:"",
        }
    });
    const {getCheckoutList, getCheckoutList_error} = GetOrderCheckoutSession(cartId)
    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target
        setData(prevData => ({
            shippingAddress: {...prevData.shippingAddress, [name]: value},
        }));
    }
    const handleChangeCashValue = () => {
        setIsCash(!isCash)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!isCash) {
            return window.location.href = getCheckoutList?.session?.url
        }
        if (parsedUser?.role === "admin") {
            use_notification("You not allowed to commit!", "warn")
            return
        } else if (parsedUser === null) {
            use_notification("Please login!", "error")
            setTimeout(() => navigate('/login'), 1000)
            return
        }

        dispatch(createOrderAction({cartId, formData: data}))
        dispatch(getOrdersAction())
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (create?.status === 201) {
            setData({
                shippingAddress: {
                    details: "",
                    phone: "",
                    city: "",
                    postalCode: ""
                }
            })
            use_notification("Successfully created!", "success")
        } else if (create_error?.data || getCheckoutList_error?.data) {
            use_notification("Have an error!", "error")
        }
    }, [create?.status, create_error?.data, getCheckoutList_error])
    return {data, handlerOnChangeInput, handleSubmit, handleChangeCashValue, isCash, setIsCash}
}


export const GetOrderCheckoutSession = (cartId) => {
    const dispatch = useDispatch()
    const {getCheckoutList, getCheckoutList_error} = useSelector(state => state.orders)

    useEffect(() => {
        dispatch(getOrderCheckoutSessionAction(cartId))
    }, [cartId, dispatch])
    return {getCheckoutList, getCheckoutList_error}
}

export const DestroyOrder = (id) => {
    const dispatch = useDispatch();
    const deleteHandler = (e) => {
        e.preventDefault();
        confirmAlert({
            title: "Confirm Delete",
            message: "Are you sure you want to delete this item?",
            buttons: [
                {
                    label: "Yes",
                    style: {backgroundColor: 'red'},
                    onClick: async () => {
                        await dispatch(destroyOrderAction(id));
                        await dispatch(getOrdersAction());
                        use_notification("Successfully deleted!", "success");
                    },
                },
                {
                    style: {backgroundColor: '#969696'},
                    label: "No",
                    onClick: () => {
                    },
                },
            ],
        });
    };

    useEffect(() => {

        return () => {
            // Cleanup notification messages
            toast.dismiss();
        };
    }, [dispatch]);

    return {deleteHandler};
}
