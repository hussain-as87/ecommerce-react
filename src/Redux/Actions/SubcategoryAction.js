import {use_post_data, use_get_data} from "../../Hooks/ApiDataHook";
import { CREATE_SUBCATEGORY, GET_SPECIFIC_SUBCATEGORY, SG1_ERROR, SC_ERROR} from "../Types";

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
    dispatch({ type: SG1_ERROR, payload: error });
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
    dispatch({ type: SC_ERROR, payload: error.response });
  }
};
