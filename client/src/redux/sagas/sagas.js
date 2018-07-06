import { takeLatest, all } from "redux-saga/effects";
import { fetchAllHomes } from "./homeSagas";
import { FETCH_ALL_HOMES_REQUEST } from "../actions/types";

export default function* rootSaga() {
  yield all([yield takeLatest(FETCH_ALL_HOMES_REQUEST, fetchAllHomes)]);
}
