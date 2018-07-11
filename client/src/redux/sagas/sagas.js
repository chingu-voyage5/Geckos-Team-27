import { takeLatest, all } from "redux-saga/effects";
import { fetchAllHomes } from "./homeSagas";
import { register, login, logout } from "./authSagas";
import {
  FETCH_ALL_HOMES_REQUEST,
  REGISTER_USER_REQUEST,
  LOGIN_USER_REQUEST,
  LOGOUT_USER_REQUEST
} from "../actions/types";

export default function* rootSaga() {
  yield all([
    yield takeLatest(FETCH_ALL_HOMES_REQUEST, fetchAllHomes),
    yield takeLatest(REGISTER_USER_REQUEST, register),
    yield takeLatest(LOGIN_USER_REQUEST, login),
    yield takeLatest(LOGOUT_USER_REQUEST, logout)
  ]);
}
