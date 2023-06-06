import {use_create_data, use_index_data} from "../../Hooks/ApiDataHook";
import {ERROR, CREATE_SUBCATEGORY, GET_SPECIFIC_SUBCATEGORY} from "../Types";

const url = "/subcategories";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzNiYjMzOWMyMjA4YzcxNWE5NTBkNmMiLCJpYXQiOjE2ODYwMzg1OTcsImV4cCI6MTY5MzgxNDU5N30.EiXvpt92eRmmfPeXgIR7haGNJpdjTmESUyjKg5l0slw";



/**
 * @method GET
 * @return data object
 * @static true
 */
export const getSpecificSubcategories = (category) => async (dispatch) => {
  try {
    const response =await use_index_data(`/categories/${category}/subcategories`, {
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
    const response =await use_create_data(url, formData,{
      headers: { Authorization: `Bearer ${token}`},
    });
    dispatch({ type: CREATE_SUBCATEGORY, payload: response ,loading:true});
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR, payload: error.response });
  }
};
