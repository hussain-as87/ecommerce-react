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
import {getCouponsAction} from "../Redux/Actions/CouponAction";

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
    }, [carts, dispatch, page])
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
    const inc = (e) => {
        e.preventDefault();
        setData((prevData) => ({...prevData, quantity: prevData.quantity + 1}));
    };

    const dec = (e) => {
        e.preventDefault();
        setData((prevData) => ({...prevData, quantity: prevData.quantity - 1}));
    };

    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target;
        setData((prevData) => ({...prevData, [name]: value}));
    };

    useEffect(() => {
        dispatch(editCartItemAction({id, formData: data}));
        dispatch(getCartItemsAction({limit: 4, page: 1}));
    }, [data, dispatch, id]);
    return {handlerOnChangeInput, data, inc, dec};

}
export const ApplyCouponOnCart = () => {
    const dispatch = useDispatch();
    const [discountValue, setDiscountValue] = useState(0);
    const [data, setData] = useState({
        coupon: ''
    });
    const {applyCoupon, applyCoupon_error} = useSelector((state) => state.carts);
    const {coupons} = useSelector((state) => state.coupons);
    useEffect(() => {
        dispatch(getCouponsAction({name: data?.coupon}))
    }, [data?.coupon, dispatch])
    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target;
        setData((prevData) => ({...prevData, [name]: value}));
    };

    const applyHandler = async (event) => {
        event.preventDefault();
        await dispatch(applyCouponOnCartAction(data));
        setDiscountValue(coupons.result === 1 ? coupons.data[0].discount : 0)
        await dispatch(getCartItemsAction({limit: 500, page: 1}));
    };
    useEffect(() => {
        if (applyCoupon?.status === 200) {
            setData({coupon: ''})
            use_notification('successfully applied the coupon!', 'success');
        } else if (applyCoupon_error?.data?.status === "error") {
            use_notification(applyCoupon_error?.data?.message, "error")
        }
    }, [applyCoupon?.status, applyCoupon_error?.data?.message, applyCoupon_error?.data?.status]);
    return {handlerOnChangeInput, applyHandler, data, discountValue};
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
