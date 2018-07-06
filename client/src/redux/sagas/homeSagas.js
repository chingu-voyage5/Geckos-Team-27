import { call, put } from "redux-saga/effects";
import { fetchAllHomesResult } from "../actions/index";
import { api } from "../../utils";

export function* fetchAllHomes(action) {
  try {
    const homes = yield call(api, "/api/homes");
    yield put(fetchAllHomesResult(homes));
  } catch (error) {
    yield put(fetchAllHomesResult(error));
  }
}
