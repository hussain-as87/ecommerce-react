import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    createCartItemAction,
    destroyCartItemAction,
    editCartItemAction,
    applyCouponOnCartAction,
    clearCartItemsAction,
    getCartItemsAction
} from "../Redux/Actions/CartAction";
import use_notification from "./use_notification";
import {confirmAlert} from "react-confirm-alert";
import {toast} from "react-toastify";

export const GetCartItems = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const {carts, rg_loading} = useSelector((state) => state.carts)
    let pageCount = 0;
    if (carts.paginationResult)
        pageCount = carts.paginationResult.numberOfPages
    const getPage = async (page) => {
        await setPage(page)
    }
    useEffect(() => {
        dispatch(getCartItemsAction({page: page, limit: 2}))
    }, [dispatch, page])
    return {carts, rg_loading, pageCount, getPage}
}
export const CreateCartItem = () => {
    const dispatch = useDispatch();
    const [isPress, setIsPress] = useState(false)
    const [errors, setErrors] = useState([])
    const [data, setData] = useState({
        productId: "",
        color: ""
    })
    const {create, create_error} = useSelector((state) => state.carts)

    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target
        setData((prevData) => ({...prevData, [name]: value}));
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsPress(true)
        await dispatch(createCartItemAction(data));
        await dispatch(getCartItemsAction())
    }
    useEffect(() => {
        if (create_error.data?.errors) {
            setErrors(create_error.data.errors); //set errors with response data
            setIsPress(false)
        }
        if (create.status === 201) {
            setIsPress(false)
            setData({productId: "", color: ""})
            use_notification("Successfully added!", "success")
        }
    }, [create?.status, create_error?.data?.errors])
    return {handlerOnChangeInput, handleSubmit, isPress, data, errors}
}
export const EditCartItem = (id) => {
    const dispatch = useDispatch();
    const [isPress, setIsPress] = useState(false);
    const [errors, setErrors] = useState([]);
    const [data, setData] = useState({
        quantity: 1,
    });
    const {edit, edit_error} = useSelector((state) => state.carts);

    useEffect(() => {

        if (edit_error.data?.errors) {

            setErrors(edit_error.data.errors); //set errors with response data
            setIsPress(false);
        }
    }, [edit_error?.data?.errors]);

    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target;
        setData((prevData) => ({...prevData, [name]: value}));
    };

    const UpdateHandler = async (event) => {
        event.preventDefault();
        setIsPress(true);
        await dispatch(editCartItemAction({id, formData: data}));
        await dispatch(getCartItemsAction());
    };

    useEffect(() => {
        if (edit.status === 200) {
            setIsPress(false);
            use_notification('Successfully updated!', 'success');
        }
    }, [dispatch, edit?.status]);
    return {handlerOnChangeInput, UpdateHandler, isPress, data, errors};
}
export const ApplyCouponOnCart = () => {
    const dispatch = useDispatch();
    const [isPress, setIsPress] = useState(false);
    const [errors, setErrors] = useState([]);
    const [data, setData] = useState({
        coupon: ''
    });
    const {ApplyCoupon, ApplyCoupon_error} = useSelector((state) => state.carts);

    useEffect(() => {
        if (ApplyCoupon_error.data?.errors) {
            setErrors(ApplyCoupon_error.data.errors); //set errors with response data
            setIsPress(false);
        }
    }, [ApplyCoupon_error?.data?.errors]);

    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target;
        setData((prevData) => ({...prevData, [name]: value}));
    };

    const applyHandler = async (event) => {
        event.preventDefault();
        setIsPress(true);
        await dispatch(applyCouponOnCartAction(data));
        await dispatch(getCartItemsAction());
    };

    useEffect(() => {
        if (ApplyCoupon.status === 200) {
            setIsPress(false);
            use_notification('successfully updated!', 'success');
        }
    }, [dispatch, ApplyCoupon?.status]);
    return {handlerOnChangeInput, applyHandler, isPress, data, errors};
}
export const DestroyCartItem = (id) => {
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
                        await dispatch(destroyCartItemAction(id));
                        await dispatch(getCartItemsAction());
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
export const ClearCartItems = () => {
    const dispatch = useDispatch();
    const deleteHandler = (e) => {
        e.preventDefault();
        confirmAlert({
            title: "Confirm Delete",
            message: "Are you sure you want to clear your shopping cart?",
            buttons: [
                {
                    label: "Yes",
                    style: {backgroundColor: 'red'},
                    onClick: async () => {
                        await dispatch(clearCartItemsAction());
                        await dispatch(getCartItemsAction());
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
