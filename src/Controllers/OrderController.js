import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    getOrdersAction,
    getOrderAction,
    createOrderAction,
    updateOrderToPaidAction,
    updateOrderToDeliverAction,
    getOrderCheckoutSessionAction
} from "../Redux/Actions/OrderAction";
import {useParams} from "react-router-dom";
import use_notification from "./use_notification";

export const GetOrders = () => {
    const dispatch = useDispatch()
    const {orders, orders_error} = useSelector(state => state.orders)
    useEffect(() => {
        dispatch(getOrdersAction())
    }, [dispatch])
    return {orders, orders_error}
}
export const GetOrder = (id) => {
    const dispatch = useDispatch()
    const {order, order_error} = useSelector(state => state.orders)

    useEffect(() => {
        dispatch(getOrderAction(id))
    }, [id, dispatch])
    return {order, order_error}
}
export const CreateOrder = (cartId) => {
    const dispatch = useDispatch()
    const {create, create_error} = useSelector(state => state.orders)

    const handleSubmit = async (event) => {
        event.preventDefault()
        dispatch(createOrderAction(cartId))
    }
    useEffect(() => {
        if (create?.status === 201) {
            use_notification("Successfully created!", "success")
        } else if (create_error?.data) {
            use_notification("Have an error!", "error")
        }
    }, [create?.status, create_error?.data, dispatch])
    return {create, handleSubmit}
}
export const UpdateToPaidOrder = (id) => {
    const dispatch = useDispatch()
    const {updateToPaid, updateToPaid_error} = useSelector(state => state.orders)

    const handleUpdateToPaid = async (event) => {
        event.preventDefault()
        dispatch(updateOrderToPaidAction(id))
    }
    useEffect(() => {
        if (updateToPaid?.status === 200) {
            use_notification("Successfully updated!", "success")
        } else if (updateToPaid_error?.data) {
            use_notification("Have an error!", "error")
        }
    }, [updateToPaid?.status, updateToPaid_error?.data, dispatch])
    return {updateToPaid, handleUpdateToPaid}
}
export const UpdateToDeliveredOrder = (id) => {
    const dispatch = useDispatch()
    const {updateToDeliver, updateToDeliver_error} = useSelector(state => state.orders)

    const handleUpdateToDeliver = async (event) => {
        event.preventDefault()
        dispatch(updateOrderToDeliverAction(id))
    }
    useEffect(() => {
        if (updateToDeliver?.status === 200) {
            use_notification("Successfully updated!", "success")
        } else if (updateToDeliver_error?.data) {
            use_notification("Have an error!", "error")
        }
    }, [updateToDeliver?.status, updateToDeliver_error?.data, dispatch])
    return {updateToDeliver, handleUpdateToDeliver}
}
export const GetOrderCheckoutSession = (cartId) => {
    const dispatch = useDispatch()
    const {getCheckoutList, getCheckoutList_error} = useSelector(state => state.orders)

    useEffect(() => {
        dispatch(getOrderCheckoutSessionAction(cartId))
    }, [cartId, dispatch])
    return {getCheckoutList, getCheckoutList_error}
}