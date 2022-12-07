import axios from "axios";
import {
  FAIL,
  GET_CURRENT,
  GET_USERS,
  LOGIN,
  LOGOUT,
  REGISTER,DELETE_USERS
} from "../Types/authTypes";
import { alert_error } from "./errorActions";

export const register = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/users/register", data);
    dispatch({ type: REGISTER, payload: res.data });
  } catch (error) {
    error.response.data.errors.forEach((el) => {
      dispatch(alert_error(el.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const deleteusers = (id) => async (dispatch,navigate) => {
  try {
    const res = await axios.delete(`/users/del/${id}`);
    console.log(res.data);
    dispatch({ type: DELETE_USERS, payload: res.data });
    navigate("/profile");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
export const login = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/users/login", data);
    dispatch({ type: LOGIN, payload: res.data });

    // window.location.reload();
    navigate("/profile");
  } catch (error) {
    error.response.data.errors.forEach((el) => {
      dispatch(alert_error(el.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

export const get_current = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/users/current", config);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const getusers = () => async (dispatch) => {
  try {
    const res = await axios.get("/users/all");
    console.log(res.data);
    dispatch({ type: GET_USERS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
}
export const logout = () => {
  return { type: LOGOUT };
};
