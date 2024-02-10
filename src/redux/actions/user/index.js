import axiosConfig from "reduxDir/axiosConfig.js";
import { headers, errorMessage } from "../../../utils/config";
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from "../user/constants";

export const listUsers = () => async (dispatch) => {
  dispatch({ type: USER_LIST_REQUEST });
  try {
    const { data } = await axiosConfig.get("/api/users", {
      headers,
    });
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message = errorMessage(error);
    dispatch({ type: USER_LIST_FAIL, payload: message });
  }
};
