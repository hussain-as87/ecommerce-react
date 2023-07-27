import {useState, useEffect, useMemo} from 'react';
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
import {getCouponByNameAction} from "../Redux/Actions/CouponAction";

export const GetCartItems = () => {
    const storedUser = useMemo(() => localStorage.getItem('user'), []);
    const parsedUser = useMemo(() => (storedUser ? JSON.parse(storedUser) : null), []);

    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    const { carts, loading } = useSelector((state) => state.carts);

    const pageCount = useMemo(() => (carts.paginationResult ? carts.paginationResult.numberOfPages : 0), [carts.paginationResult]);
    const itemsCount = useMemo(() => carts?.numberCartItems || 0, [carts?.numberCartItems]);

    const getPage = async (page) => {
        await setPage(page);
    };

    useEffect(() => {
        dispatch(getCartItemsAction({ page: page, limit: 4 }));
    }, [dispatch, page, parsedUser]);

    return { carts, loading, pageCount, getPage, itemsCount };
};
export const CreateCartItem = (productId) => {
    const dispatch = useDispatch();
    const storedUser = localStorage.getItem("user");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    const [isPress, setIsPress] = useState(false)
    const [data, setData] = useState({
        productId: "",
        color: ""
    })
    useEffect(() => {
        setData((prevData) => ({...prevData, productId: productId}));
    }, [productId])
    const {create, create_error} = useSelector((state) => state.carts)
    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target
        setData((prevData) => ({...prevData, [name]: value}));
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (parsedUser?.role === "admin") {
            use_notification("You not allowed to add item to cart!", "warn")
            return
        } else if (parsedUser === null) {
            use_notification("Please login!", "error")
            setTimeout(() => window.location.href = "/login", 1000)
            return
        }

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
    }, [create, create_error])

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
    }, [data, data.quantity, dispatch, id]);
    return {handlerOnChangeInput, data, inc, dec};

}
export const ApplyCouponOnCart = () => {
    const dispatch = useDispatch();
    const [discountValue, setDiscountValue] = useState(0);
    const [data, setData] = useState({
        coupon: ''
    });
    const {applyCoupon, applyCoupon_error} = useSelector((state) => state.carts);
    const {couponByName} = useSelector((state) => state.coupons);
    useEffect(() => {
        dispatch(getCouponByNameAction(data?.coupon))
    }, [data?.coupon, dispatch])
    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target;
        setData((prevData) => ({...prevData, [name]: value}));
    };
    const storedUser = localStorage.getItem("user");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    const applyHandler = async (event) => {
        event.preventDefault();
        if (parsedUser?.role === "admin") {
            use_notification("You not allowed to add item to cart!", "warn")
            return
        } else if (parsedUser === null) {
            use_notification("Please login!", "error")
            setTimeout(() => window.location.href = "/login", 1000)
            return
        }
        await dispatch(applyCouponOnCartAction(data));
        setDiscountValue(couponByName.result === 1 ? couponByName.data[0].discount : 0)
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
    const storedUser = localStorage.getItem("user");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
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
                        if (parsedUser?.role === "admin") {
                            use_notification("You not allowed to add item to cart!", "warn")
                            return
                        } else if (parsedUser === null) {
                            use_notification("Please login!", "error")
                            setTimeout(() => window.location.href = "/login", 1000)
                            return
                        }
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
    const storedUser = localStorage.getItem("user");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
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
                        if (parsedUser?.role === "admin") {
                            use_notification("You not allowed to add item to cart!", "warn")
                            return
                        } else if (parsedUser === null) {
                            use_notification("Please login!", "error")
                            setTimeout(() => window.location.href = "/login", 1000)
                            return
                        }
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
