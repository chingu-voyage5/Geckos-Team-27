import { takeLatest, all } from "redux-saga/effects";
import { fetchAllHomes, fetchHome } from "./homeSagas";
import { register, login, logout, editUserProfile } from "./auth/authSagas";
import { getUserProfile } from "./userSagas";
import {
  FETCH_ALL_HOMES_REQUEST,
  FETCH_HOME_REQUEST,
  REGISTER_USER_REQUEST,
  LOGIN_USER_REQUEST,
  LOGOUT_USER_REQUEST,
  EDIT_USER_REQUEST,
  GET_USER_REQUEST
} from "../actions/types";

export default function* rootSaga() {
  yield all([
    yield takeLatest(FETCH_ALL_HOMES_REQUEST, fetchAllHomes),
    yield takeLatest(FETCH_HOME_REQUEST, fetchHome),
    yield takeLatest(REGISTER_USER_REQUEST, register),
    yield takeLatest(LOGIN_USER_REQUEST, login),
    yield takeLatest(LOGOUT_USER_REQUEST, logout),
    yield takeLatest(EDIT_USER_REQUEST, editUserProfile),
    yield takeLatest(GET_USER_REQUEST, getUserProfile)
  ]);
}
