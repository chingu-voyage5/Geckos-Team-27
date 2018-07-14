import {
  FETCH_ALL_HOMES_REQUEST,
  FETCH_ALL_HOMES_RESULT,
  REGISTER_USER_REQUEST,
  REGISTER_USER_RESULT,
  LOGIN_USER_REQUEST,
  LOGIN_USER_RESULT,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_RESULT,
  EDIT_USER_RESULT
} from "./types";
import { createActions } from "redux-actions";

const homeActions = createActions(
  {},
  FETCH_ALL_HOMES_REQUEST,
  FETCH_ALL_HOMES_RESULT
);

export const { fetchAllHomesRequest, fetchAllHomesResult } = homeActions;

// auth
const authActions = createActions(
  {
    EDIT_USER_REQUEST: (val, id) => ({ val, id })
  },
  REGISTER_USER_REQUEST,
  REGISTER_USER_RESULT,
  LOGIN_USER_REQUEST,
  LOGIN_USER_RESULT,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_RESULT,
  EDIT_USER_RESULT
);

export const {
  registerUserRequest,
  registerUserResult,
  loginUserRequest,
  loginUserResult,
  logoutUserRequest,
  logoutUserResult,
  editUserRequest,
  editUserResult
} = authActions;
