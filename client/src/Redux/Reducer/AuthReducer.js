import {
  GET_CURRENT,
  GET_USERS,
  LOGIN,
  LOGOUT,
  REGISTER,DELETE_USERS
} from "../Types/authTypes";

const initialState = {
  users: [],
  user: null,
  errors: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload};
    case REGISTER:
      localStorage.setItem("token", payload.token);

      return { ...state, user: payload.user };
    case LOGIN:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user };
    case GET_CURRENT:
      return { ...state, user: payload };
     
     
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, user: null };
      case DELETE_USERS:
      return { loading: true };
     
    default:
      return state;
  }
};
export default reducer;
