import {useState, useEffect} from 'react';
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
    const [itemsCount, setItemsCount] = useState(1);
    const {carts, loading} = useSelector((state) => state.carts)
    let pageCount = 0;
    if (carts.paginationResult)
        pageCount = carts.paginationResult.numberOfPages
    const getPage = async (page) => {
        await setPage(page)
    }
    useEffect(() => {
        dispatch(getCartItemsAction({page: page, limit: 4}))
        setItemsCount(carts?.numberCartItems)
    }, [carts?.numberCartItems, dispatch, page])
    return {carts, loading, pageCount, getPage, itemsCount}
}
export const CreateCartItem = (productId) => {
    const dispatch = useDispatch();
    const [isPress, setIsPress] = useState(false)
    const [data, setData] = useState({
        productId: productId,
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
        await dispatch(getCartItemsAction({limit: 500, page: 1}));
    }
    useEffect(() => {
        if (create.status === 200) {
            setIsPress(false)
            setData({productId: "", color: ""})
            use_notification("Successfully added!", "success")
        } else if (create_error?.data) {
            const createError = create_error?.data?.errors[0].msg;
            const errorMessage = createError > 1 ? createError.join(', ') : createError;
            use_notification(errorMessage, "error")
            setIsPress(false)
        }
    }, [create.status, create_error?.data, create_error?.data?.errors])

    return {handlerOnChangeInput, handleSubmit, isPress, data}
}
export const EditCartItemsQuantity = (id, quantity) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        quantity: quantity,
    });

    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target;
        setData((prevData) => ({...prevData, [name]: value}));
    };

    useEffect(() => {
        dispatch(editCartItemAction({id, formData: data}));
        dispatch(getCartItemsAction({limit: 4, page: 1}));
    }, [data]);
    return {handlerOnChangeInput, data, setData};
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
                        await dispatch(getCartItemsAction({limit: 4, page: 1}));
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
    const clearHandler = (e) => {
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
                        use_notification("Successfully deleted!", "success");
                        window.location.reload();
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

    return {clearHandler};
}
