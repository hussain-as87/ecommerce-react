import {use_get_data, use_post_data} from "../../Hooks/ApiDataHook";
import {GET_ALL_REVIEWS, CREATE_REVIEW, RG_ERROR, RC_ERROR} from "../Types";
const url = "/reviews"
const token = localStorage.getItem('token') || "";

/**
 * @method GET
 * @return data object
 * @static true
 */
export const getReviewsAction = (productId) => async (dispatch) => {
  try {
    const response =await use_get_data(`${url}?product=${productId}`);
    dispatch({ type: GET_ALL_REVIEWS, payload: response });
  } catch (error) {
    console.log(error);
    dispatch({ type: RG_ERROR, payload: error });
  }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const createReviewAction = ({id,formData}) => async (dispatch) => {
  try {
    const response =await use_post_data(`/products/${id}/reviews`, formData,{
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: CREATE_REVIEW, payload: response ,loading:true});
  } catch (error) {
    console.log(error);
    dispatch({ type: RC_ERROR, payload: error.response });
  }
};
