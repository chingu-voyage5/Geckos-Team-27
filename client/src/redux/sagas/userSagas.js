import { call, put } from "redux-saga/effects";
import { getUserResult } from "../actions/index";
import { apiGet } from "../../utils";

export function* getUserProfile(action) {
  try {
    const user = yield call(apiGet, `/api/user/${action.payload}`);
    yield put(getUserResult(user));
  } catch (error) {
    yield put(getUserResult(error));
  }
}
