import { handleActions } from "redux-actions";

const initState = {
  users: {},
  user: {}
};

const userReducer = handleActions(
  {
    GET_USER_RESULT: {
      next: (state, action) => ({
        ...state,
        user: action.payload
      }),
      throw: (state, action) => ({ ...state, err: action.payload.message })
    }
  },
  initState
);

export default userReducer;
