import { GET_USERS } from "../Types/Type";
import axios from "axios";
export const getusers = () => async (dispatch) => {
  try {
    const res = await axios.get("/users/all");
   
    dispatch({ type: GET_USERS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const adduser = (newuser) => async (dispatch) => {
  try {
    const res = await axios.post("/users/", newuser);
    console.log(res.data);
    dispatch(getusers());
  } catch (error) {
    console.log(error);
  }
};
export const deluser = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/users/del/${id}`);
    console.log(res.data);
    dispatch(getusers());
  } catch (error) {
    console.log(error);
  }
};
export const edituser = (id, updated) => async (dispatch) => {
  try {
    const res = await axios.put(`/users/edit/${id}`, updated);
    console.log(res.data);
    dispatch(getusers());
  } catch (error) {
    console.log(error);
  }
};
