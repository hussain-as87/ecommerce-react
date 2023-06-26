import {
    CREATE_REVIEW,
    GET_ALL_REVIEWS, RC_ERROR, RG_ERROR
} from "../Types";

const initialState = {
    reviews: [],
    create: [],
    rg_error: [],
    rc_error: [],
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
            return {...state, rg_error: action.payload, loading: true};
        case RC_ERROR:
            return {...state, rc_error: action.payload, loading: true};
        default:
            return state;
    }
};

export default ReviewReducer;
