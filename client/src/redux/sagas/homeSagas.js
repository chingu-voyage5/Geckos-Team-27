import { call, put } from "redux-saga/effects";
import { fetchAllHomesResult } from "../actions/index";
import { apiGet } from "../../utils";

export function* fetchAllHomes(action) {
  try {
    const homes = yield call(apiGet, "/api/homes");
    yield put(fetchAllHomesResult(homes));
  } catch (error) {
    yield put(fetchAllHomesResult(error));
  }
}
