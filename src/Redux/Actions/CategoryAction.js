import BaseURL from "../../API/BaseURL";
import { indexData } from "../../Hooks/ApiDataHook";
import { ERROR, GET_ALL_CATEGORIES } from "../Types";

const url = "/api/v1/categories";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzNiYjNkZGMyMjA4YzcxNWE5NTBkNmYiLCJpYXQiOjE2ODM5NTMyNDIsImV4cCI6MTY5MTcyOTI0Mn0.iVbHlkQljULdwdm5P9uImC1-Nzj-NCH2fg3lwOYzBgo";

export const getCategories = () => async (dispatch) => {
  try {
    const response = indexData(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log(response.data.data);
    dispatch({ type: GET_ALL_CATEGORIES, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR, payload: error });
  }
};
