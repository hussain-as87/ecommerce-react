import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    createReviewAction,
    destroyReviewAction,
    editReviewAction,
    getReviewAction,
    getReviewsAction
} from "../Redux/Actions/ReviewAction";
import {useParams} from "react-router-dom";
import use_notification from "./use_notification";
import {confirmAlert} from "react-confirm-alert";
import {toast} from "react-toastify";

export const GetReviews = (productId) => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const {reviews, rg_loading} = useSelector((state) => state.reviews)
    let pageCount = 0;
    if (reviews.paginationResult)
        pageCount = reviews.paginationResult.numberOfPages
    const getPage = async (page) => {
        await setPage(page)
    }
    useEffect(() => {
        dispatch(getReviewsAction(productId))
    }, [productId,dispatch])
    return {reviews, rg_loading, pageCount, getPage}
}
export const CreateReview = () => {
    const dispatch = useDispatch();
    const [isPress, setIsPress] = useState(false)
    const [errors, setErrors] = useState([])
    const {id} = useParams();
    const [data, setData] = useState({
        title: "",
        ratings: 0
    })
    const {create, rc_error} = useSelector((state) => state.reviews)

    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target
        setData((prevData) => ({...prevData, [name]: value}));
    }
    const handlerOnChangeRating = (newValue) => {
        setData((prevData) => ({...prevData, ratings: newValue}));
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsPress(true)
        await dispatch(createReviewAction({id, formData: data}));
        await dispatch(getReviewsAction(id))
    }
    useEffect(() => {
        if (rc_error.data?.errors) {
            const productError = rc_error.data.errors.find((error) => error.param === 'product');
            if (productError) {
                use_notification(productError.msg, 'error');
                return;
            }
            setErrors(rc_error.data.errors); //set errors with response data
            setIsPress(false)
        }
        if (create.status === 201) {
            setIsPress(false)
            setData({title: '', ratings: 0})
            use_notification("the review added successfully!", "success")
        }
    }, [create?.status, rc_error?.data?.errors])
    return {handlerOnChangeInput, handlerOnChangeRating, handleSubmit, isPress, data, errors}
}
export const EditReview = (id) => {
    const dispatch = useDispatch();
    const [isPress, setIsPress] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState([]);
    const {review} = useSelector((state) => state.reviews);
    const [data, setData] = useState({
        title: '',
        ratings: 0,
    });
    const {edit, edit_error} = useSelector((state) => state.reviews);
    const params = useParams();

    useEffect(() => {
        dispatch(getReviewAction(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (review?.data) {
            setData({
                title: review.data.title,
                ratings: review.data.ratings,
            });
        }
        if (edit_error.data?.errors) {
            const productError = edit_error.data.errors.find((error) => error.param === 'product');
            if (productError) {
                use_notification(productError.msg, 'error');
                return;
            }
            setErrors(edit_error.data.errors); //set errors with response data
            setIsPress(false);
        }
    }, [edit_error?.data?.errors, review]);

    const handlerOnChangeInput = (event) => {
        const {name, value} = event.target;
        setData((prevData) => ({...prevData, [name]: value}));
    };

    const handlerOnChangeRating = (newValue) => {
        setData((prevData) => ({...prevData, ratings: newValue}));
    };

    const UpdateHandler = async (event) => {
        event.preventDefault();
        setIsPress(true);
        await dispatch(editReviewAction({id, formData: data}));
        setShowModal(false)
        await dispatch(getReviewsAction(params.id));
    };

    useEffect(() => {
        if (edit.status === 200) {
            setIsPress(false);
            use_notification('The review updated successfully!', 'success');
        }
    }, [dispatch, edit?.status]);
    return {handlerOnChangeInput, handlerOnChangeRating, UpdateHandler, isPress, data, errors, showModal, setShowModal};
}
export const DestroyReview = (id) => {
    const dispatch = useDispatch();
    const parms = useParams();
    const deleteHandler = (e) => {
        e.preventDefault();
        confirmAlert({
            title: "Confirm Delete",
            message: "Are you sure you want to delete this review?",
            buttons: [
                {
                    label: "Yes",
                    style:{backgroundColor:'red'},
                    onClick: async () => {
                        await dispatch(destroyReviewAction(id));
                        await dispatch(getReviewsAction(parms.id));
                        use_notification("Successfully deleted!", "success");
                    },
                },
                {
                    style:{backgroundColor:'#969696'},
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
