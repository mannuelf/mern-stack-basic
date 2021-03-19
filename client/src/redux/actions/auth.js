import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/actionTypes";
import { alertAction } from "./alert";

export const registerUser = ({ firstName, email, password }) => async (
  dispatch
) => {
  const userData = JSON.stringify({
    firstName,
    email,
    password,
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth",
      userData,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: {
        jwtToken: res.data.token,
      },
    });
    localStorage.setItem("token", res.data.token);
    dispatch(alertAction("Success", "success"));
    console.log(res);
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data) {
      dispatch(alertAction(error.response.data, "danger"));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
    localStorage.removeItem("token");
    // trigger an alert
    console.log(error);
  }
};
