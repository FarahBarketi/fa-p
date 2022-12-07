import { GET_Comments } from "../Types/CommentTypes";

const initialState = {
  comments: [
 
  ],
};

 const CommentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_Comments:
      return { ...state, comments: payload };
    default:
      return state;
  }
};
export default CommentReducer;