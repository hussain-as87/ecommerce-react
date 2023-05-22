import {use_create_data} from "../../Hooks/ApiDataHook";
import {ERROR, CREATE_SUBCATEGORY} from "../Types";

const url = "/api/v1/subcategories";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzNiYjMzOWMyMjA4YzcxNWE5NTBkNmMiLCJpYXQiOjE2ODQzMjQyMDIsImV4cCI6MTY5MjEwMDIwMn0.1vEchRw6jR02DZ3DBbSiZC760csCeNQC3NHK-yIVvJw";

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
