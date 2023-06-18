import {use_create_data} from "../../Hooks/ApiDataHook";
import {ERROR, AUTH_SIGNUP} from "../Types";

const url = "/auth";

/**
 * @method GET
 * @return data object
 * @static true
 */
export const signupAction = (formData) => async (dispatch) => {
  try {
    const response =await use_create_data(`${url}/signup`,formData);
    dispatch({ type: AUTH_SIGNUP, payload: response });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR, payload: error });
  }
};


