import { GET_ARTICLES } from "../Types/ArticleTypes";
import { alert_error } from "./errorActions";
import {FAIL} from "../Types/authTypes";
import axios from "axios";
export const get_articles = () => async (dispatch) => {
  try {
    const res = await axios.get("/articles/get");
    console.log("dar", res.data.article);
    dispatch({ type: GET_ARTICLES, payload: res.data.article });
  } catch (error) {
    console.log(error);
  }
};
export const add_article = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/articles/add", data);
    console.log(res.data);
    dispatch(get_articles());
  } catch (error) {
    error.response.data.errors.forEach((el) => {
      dispatch(alert_error(el.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const del_article = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/articles/del/${id}`);

    dispatch(get_articles());
  } catch (error) {
    error.response.data.errors.forEach((el) => {
      dispatch(alert_error(el.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const edit_article = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`/articles/put/${id}`, data);

    dispatch(get_articles());
  } catch (error) {
    error.response.data.errors.forEach((el) => {
      dispatch(alert_error(el.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
