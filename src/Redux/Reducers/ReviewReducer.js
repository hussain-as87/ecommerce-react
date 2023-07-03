import {
    CREATE_REVIEW, DELETE_REVIEW, EDIT_REVIEW,
    GET_ALL_REVIEWS, GET_REVIEW, RC_ERROR, RD_ERROR, RE_ERROR, RG1_ERROR, RG_ERROR
} from "../Types";

const initialState = {
    reviews: [],
    review: [],
    create: [],
    edit: [],
    delete: [],
    reviews_error: [],
    review_error: [],
    edit_error: [],
    create_error: [],
    delete_error: [],
    rg_loading: true,
    re_loading: true,
    rg1_loading: true,
    rd_loading: true,
    rc_loading: true,
    loading: true,
};
const ReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_REVIEWS:
            return {...state, reviews: action.payload, rg_loading: false};
        case GET_REVIEW:
            return {...state, review: action.payload, rg1_loading: false};
        case CREATE_REVIEW:
            return {...state, create: action.payload, rc_loading: false};
        case EDIT_REVIEW:
            return {...state, edit: action.payload, re_loading: false};
        case DELETE_REVIEW:
            return {...state, delete: action.payload, rd_loading: false};
        case RG_ERROR:
            return {...state, reviews_error: action.payload, loading: false};
        case RC_ERROR:
            return {...state, create_error: action.payload, loading: false};
        case RE_ERROR:
            return {...state, edit_error: action.payload, loading: false};
        case RG1_ERROR:
            return {...state, review_error: action.payload, loading: false};
        case RD_ERROR:
            return {...state, delete_error: action.payload, loading: false};
        default:
            return state;
    }
};

export default ReviewReducer;
