import { call, put } from "redux-saga/effects";
import { fetchReviewsResult } from "../actions/index";
import { apiGet } from "../../utils";

export function* fetchAllReviews(action) {
  try {
    const reviews = yield call(apiGet, "/api/reviews");
    yield put(fetchReviewsResult(reviews));
  } catch (error) {
    yield put(fetchReviewsResult(error));
  }
}
