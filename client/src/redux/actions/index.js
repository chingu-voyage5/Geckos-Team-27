import {
  FETCH_DEFAULT,
  FETCH_ALL_HOMES_REQUEST,
  FETCH_ALL_HOMES_RESULT
} from "./types";
import { createActions } from "redux-actions";

const homeActions = createActions(
  {},
  FETCH_ALL_HOMES_REQUEST,
  FETCH_ALL_HOMES_RESULT
);

export const { fetchAllHomesRequest, fetchAllHomesResult } = homeActions;
