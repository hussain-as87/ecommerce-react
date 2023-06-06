import {use_create_data, use_index_data} from "../../Hooks/ApiDataHook";
import {ERROR, CREATE_CATEGORY, GET_ALL_CATEGORIES} from "../Types";

const url = "/categories";
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzNiYjMzOWMyMjA4YzcxNWE5NTBkNmMiLCJpYXQiOjE2ODYwMzg1OTcsImV4cCI6MTY5MzgxNDU5N30.EiXvpt92eRmmfPeXgIR7haGNJpdjTmESUyjKg5l0slw";

/**
 * @method GET
 * @return data object
 * @static true
 */
export const getCategories = (limit,page) => async (dispatch) => {
  try {
    const response =await use_index_data(url+`?limit=${limit}&page=${page}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: GET_ALL_CATEGORIES, payload: response });
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
export const createCategory = (formData) => async (dispatch) => {
  try {
    const response =await use_create_data(url, formData,{
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
    });
    dispatch({ type: CREATE_CATEGORY, payload: response ,loading:true});
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR, payload: error.response });
  }
};
