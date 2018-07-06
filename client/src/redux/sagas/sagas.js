import { takeLatest, all } from "redux-saga/effects";
import { fetchAllHomes } from "./homeSagas";
import { FETCH_ALL_HOMES_REQUEST } from "../actions/types";

function* helloSaga() {
  yield console.log("Hello Sagas!");
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    yield takeLatest(FETCH_ALL_HOMES_REQUEST, fetchAllHomes)
  ]);
}
