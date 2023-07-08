import {use_get_data, use_post_data} from "../../Hooks/ApiDataHook";
import {GET_ALL_BRANDS, CREATE_BRAND, BC_ERROR, BG_ERROR} from "../Types";

const url = "/brands";
const token = localStorage.getItem('token') || "";

/**
 * @method GET
 * @return data object
 * @static true
 */
export const getBrands = (limit,page) => async (dispatch) => {
  try {
    const response =await use_get_data(url+`?limit=${limit}&page=${page}`);
    dispatch({ type: GET_ALL_BRANDS, payload: response });
  } catch (error) {
    console.log(error);
    dispatch({ type: BG_ERROR, payload: error });
  }
};
/**
 * @method POST
 * @return data object
 * @static true
 */
export const createBrand = (formData) => async (dispatch) => {
  try {
    const response =await use_post_data(url, formData,{
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
    });
    dispatch({ type: CREATE_BRAND, payload: response ,loading:true});
  } catch (error) {
    console.log(error);
    dispatch({ type: BC_ERROR, payload: error.response });
  }
};
