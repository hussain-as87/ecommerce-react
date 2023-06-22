import {use_post_data, use_get_data} from "../../Hooks/ApiDataHook";
import {ERROR, CREATE_SUBCATEGORY, GET_SPECIFIC_SUBCATEGORY} from "../Types";

const url = "/subcategories";
const token = localStorage.getItem('token') || "";



/**
 * @method GET
 * @return data object
 * @static true
 */
export const getSpecificSubcategories = (category) => async (dispatch) => {
  try {
    const response =await use_get_data(`/categories/${category}/subcategories`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: GET_SPECIFIC_SUBCATEGORY, payload: response,loading:true });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR, payload: error });
  }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const createSubcategory = (formData) => async (dispatch) => {
  try {
    const response =await use_post_data(url, formData,{
      headers: { Authorization: `Bearer ${token}`},
    });
    dispatch({ type: CREATE_SUBCATEGORY, payload: response ,loading:true});
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR, payload: error.response });
  }
};
