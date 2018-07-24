import { call, put } from "redux-saga/effects";
import { fetchAllHomesResult, fetchHomeResult } from "../actions/index";
import { apiGet } from "../../utils";

export function* fetchAllHomes(action) {
  try {
    const homes = yield call(apiGet, "/api/homes");
    yield put(fetchAllHomesResult(homes));
  } catch (error) {
    yield put(fetchAllHomesResult(error));
  }
}

export function* fetchHome(action) {
  try {
    const home = yield call(apiGet, `/api/homes/${action.payload}`);
    yield put(fetchHomeResult(home));
  } catch (error) {
    yield put(fetchHomeResult(error));
  }
}
