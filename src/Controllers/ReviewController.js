import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createReviewAction, getReviewsAction} from "../Redux/Actions/ReviewAction";
import {useParams} from "react-router-dom";
import use_notification from "./use_notification";

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
    }, [dispatch])
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
    const {create, create_error} = useSelector((state) => state.reviews)

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
    }
    useEffect(() => {
        if (create_error.data?.errors) {
            const productError = create_error.data.errors.find((error) => error.param === 'product');
            if (productError) {
                use_notification(productError.msg, 'error');
                return;
            }
            setErrors(create_error.data.errors); //set errors with response data
            setIsPress(false)
        }
        if (create.status === 201) {
            setIsPress(false)
            setData({title: '', ratings: 0})
            use_notification("the review added successfully!", "success")
        }
    }, [create?.status, create_error?.data?.errors])
    return {handlerOnChangeInput, handlerOnChangeRating, handleSubmit, isPress, data, errors}
}
