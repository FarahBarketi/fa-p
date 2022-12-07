import { combineReducers } from "redux";
import articleReducer from "./ArticleReducer"
import authReducer from "./AuthReducer";
import errorreducer from "./errorReducer"
import CommentReducer from "./CommentReducer";
import adminReducer from "./AdminReducer"
const rootReducer = combineReducers({ adminReducer,articleReducer,authReducer, CommentReducer , errorreducer});
export default rootReducer;