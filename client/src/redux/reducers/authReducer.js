import { handleActions } from "redux-actions";

const initState = {
  isAuthenticated: false,
  user: {}
};

const authReducer = handleActions(
  {
    REGISTER_USER_RESULT: {
      next: (state, action) => ({
        ...state,
        user: action.payload
      }),
      throw: (state, action) => ({
        ...state,
        err: action.payload.message
      })
    },
    LOGIN_USER_RESULT: {
      next: (state, action) => ({
        ...state,
        isAuthenticated: true,
        user: action.payload
      }),
      throw: (state, action) => ({
        ...state,
        err: action.payload.message
      })
    },
    LOGOUT_USER_RESULT: {
      next: (state, action) => ({ ...state, isAuthenticated: false, user: {} }),
      throw: state => ({
        ...state,
        err: "There was an error logging out"
      })
    },
    EDIT_USER_RESULT: {
      next: (state, action) => ({
        ...state,
        user: action.payload
      }),
      throw: (state, action) => ({
        ...state,
        err: action.payload.message
      })
    }
  },
  initState
);

export default authReducer;
