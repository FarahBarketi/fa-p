import { GET_USERS } from "../actionTypes/Type";

const initialState = {
  users: [],
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload.userss };
    default:
      return state;
  }
};
export default reducer;