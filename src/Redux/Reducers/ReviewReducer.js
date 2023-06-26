import {
    CREATE_REVIEW,
    GET_ALL_REVIEWS, RC_ERROR, RG_ERROR
} from "../Types";

const initialState = {
    reviews: [],
    create: [],
    reviews_error: [],
    create_error: [],
    rg_loading: true,
    rc_loading: true,
};
const ReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_REVIEWS:
            return {...state, reviews: action.payload, rg_loading: false};
        case CREATE_REVIEW:
            return {...state, create: action.payload, rc_loading: false};
        case RG_ERROR:
            return {...state, reviews_error: action.payload, loading: false};
        case RC_ERROR:
            return {...state, create_error: action.payload, loading: false};
        default:
            return state;
    }
};

export default ReviewReducer;
