import { GET_USERS} from "../Types/Type";

const initialState = {
 users: [
 
  ],
};

export const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      
      return { ...state, users: payload.userss};
    default:
      return state;
  }
};
export default adminReducer;
