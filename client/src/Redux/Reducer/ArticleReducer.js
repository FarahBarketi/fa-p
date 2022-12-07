import { GET_ARTICLES } from "../Types/ArticleTypes";

const initialState = {
  articles: [
 
  ],
};

export const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ARTICLES:
      
      return { ...state, articles: payload };
    default:
      return state;
  }
};
export default articleReducer;
