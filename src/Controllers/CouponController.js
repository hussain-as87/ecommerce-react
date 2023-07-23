import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    createCouponAction,
    destroyCouponAction,
    editCouponAction,
    getCouponAction,
    getCouponsAction
} from "../Redux/Actions/CouponAction";
import use_notification from "./use_notification";
import {confirmAlert} from "react-confirm-alert";
import {toast} from "react-toastify";

export const GetCoupons = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const {coupons, loading} = useSelector((state) => state.coupons)
    let pageCount = 0;
    if (coupons.paginationResult)
        pageCount = coupons.paginationResult.numberOfPages
    const getPage = async (page) => {
        await setPage(page)
    }
    useEffect(() => {
        dispatch(getCouponsAction({page: page, limit: 2}))
    }, [dispatch, page])
    return {coupons, loading, pageCount, getPage}
}
export const GetCoupon = (id) => {
    const dispatch = useDispatch();
    const {coupon} = useSelector((state) => state.coupons)

    useEffect(() => {
        dispatch(getCouponAction(id))
    }, [dispatch, id])
    return {coupon}
}
export const CreateCoupon = () => {
    const dispatch = useDispatch();
    const [isPress, setIsPress] = useState(false)
    const [errors, setErrors] = useState([])
    const [data, setData] = useState({
        name: "",
        expire: "",
        discount: ""
    })
    const {coupons, create, create_error} = useSelector((state) => state.coupons)
    const currentPage = coupons?.paginationResult?.currentPage
    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target
        setData((prevData) => ({...prevData, [name]: value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsPress(true)
        await dispatch(createCouponAction(data));
        await dispatch(getCouponsAction({limit: 2, page: currentPage}))
    }
    useEffect(() => {
        if (create_error?.data?.status === "error") {
            use_notification('The Code already exists!', 'error');
            return;
        }
        if (create_error.data?.errors) {
            setErrors(create_error.data.errors); //set errors with response data
            setIsPress(false)
        }
        if (create.status === 201) {
            setIsPress(false)
            setData({name: '', expire: '', discount: ""})
            use_notification("the coupon added successfully!", "success")
        }
    }, [create?.status, create_error?.data])
    return {handlerOnChangeInput, handleSubmit, isPress, data, errors}
}
export const EditCoupon = (id) => {
    const dispatch = useDispatch();
    const [isPress, setIsPress] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState([]);
    const {coupon} = useSelector((state) => state.coupons);
    const [data, setData] = useState({
        name: "",
        expire: "",
        discount: ""
    });
    const {edit, edit_error} = useSelector((state) => state.coupons);

    useEffect(() => {
        dispatch(getCouponAction(id));
    }, [showModal, dispatch, id]);

    useEffect(() => {
        if (coupon?.data) {
            setData({
                name: coupon.data.name,
                expire: coupon.data.expire,
                discount: coupon.data.discount
            });
        }
        if (edit_error?.data?.status === "error") {
            use_notification('The Code already exists!', 'error');
            return;
        }
        if (edit_error.data?.errors) {
            setErrors(edit_error.data.errors); //set errors with response data
            setIsPress(false);
        }
    }, [edit_error?.data?.errors, coupon, edit_error?.data?.status]);

    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target;
        setData((prevData) => ({...prevData, [name]: value}));
    };
    const UpdateHandler = async (event) => {
        event.preventDefault();
        setIsPress(true);
        await dispatch(editCouponAction({id, formData: data}));
        await dispatch(getCouponsAction({limit: 2, page: 1}))
    };
    useEffect(() => {
        if (edit.status === 200) {
            setIsPress(false);
            use_notification('The coupon updated successfully!', 'success');
            setShowModal(false)

        }
    }, [dispatch, edit?.status]);
    useEffect(() => {

        return () => {
            // Cleanup notification messages
            toast.dismiss();
        };
    }, [dispatch]);
    return {handlerOnChangeInput, UpdateHandler, isPress, data, errors, showModal, setShowModal};
}
export const DestroyCoupon = (id) => {
    const dispatch = useDispatch();
    const deleteHandler = (e) => {
        e.preventDefault();
        confirmAlert({
            title: "Confirm Delete",
            message: "Are you sure you want to delete this coupon?",
            buttons: [
                {
                    label: "Yes",
                    style: {backgroundColor: 'red'},
                    onClick: async () => {
                        await dispatch(destroyCouponAction(id));
                        await dispatch(getCouponsAction(id));
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
