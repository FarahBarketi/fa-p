import { GET_Comments } from "../Types/CommentTypes";
import axios from "axios";
export const get_comments = () => async (dispatch) => {
  try {
    const res = await axios.get("/comments/get");
    
    dispatch({ type: GET_Comments, payload: res.data.comment });
  } catch (error) {
    console.log(error);
  }
};
export const add_comment = (id,data) => async (dispatch) => {
  try {
    const res = await axios.post(`/comments/add/${id}`, data);
    console.log(res.data);
    dispatch(get_comments());
  } catch (error) {
    console.log(error);
  }
};
export const del_comment = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/comments/del/${id}`);

    dispatch(get_comments());
  } catch (error) {
    console.log(error);
  }
};
export const edit_comment = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`/comments/put/${id}`, data);

    dispatch(get_comments());
  } catch (error) {
    console.log(error);
  }
};