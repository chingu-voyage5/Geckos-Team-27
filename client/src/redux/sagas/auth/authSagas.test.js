import sagaHelper from "redux-saga-testing";
import { call, put } from "redux-saga/effects";

const api = jest.fn();
const action = { type: "ACTION_REQUEST", payload: {} };
const actionResult = payload => ({ type: "ACTION_RESULT", payload });
// for editUserProfile saga
const editUserAction = {
  type: "EDIT_ACTION_REQUEST",
  payload: {
    id: "user_id",
    val: {}
  }
};

// tests here
