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

function* register(action) {
  try {
    const register = yield call(api, "/url", action.payload);
    yield put(actionResult(register));
  } catch (error) {
    yield put(actionResult(error.message));
  }
}

describe("AuthSagas: The Register Saga", () => {
  const it = sagaHelper(register(action));
  describe("works successfully", () => {
    it("calls the mock API fist with action request payload", res => {
      expect(res).toEqual(call(api, "/url", action.payload));
      return action.payload;
    });
    it("then trigger result action with the returned api data", res => {
      expect(res).toEqual(put(actionResult(action.payload)));
    });
    it("and then nothing", res => {
      expect(res).toBeUndefined();
    });
  });
  describe("The API is broken and throws an exception", () => {
    const it = sagaHelper(register(action));
    it("should call the mock API, will throw an error", res => {
      expect(res).toEqual(call(api, "/url", action.payload));
      return new Error("something went wrong");
    });
    it("then trigger result action with error message", res => {
      expect(res).toEqual(put(actionResult("something went wrong")));
    });
    it("and then nothing", res => {
      expect(res).toBeUndefined();
    });
  });
});

function* login(action) {
  try {
    const loginUser = yield call(api, "/url", action.payload);
    yield put(actionResult(loginUser));
  } catch (error) {
    yield put(actionResult(error.message));
  }
}

describe("AuthSagas: The Login Saga", () => {
  const it = sagaHelper(login(action));
  describe("the login works", () => {
    it("calls the mock API first with action request payload", res => {
      expect(res).toEqual(call(api, "/url", action.payload));
      return action.payload;
    });
    it("triggers result action with the returned api data", res => {
      expect(res).toEqual(put(actionResult(action.payload)));
    });
    it("and then nothing", res => {
      expect(res).toBeUndefined();
    });
  });
  describe("The Api is broken and throws an error", () => {
    const it = sagaHelper(login(action));
    it("should call api, will throw an error", res => {
      expect(res).toEqual(call(api, "/url", action.payload));
      return new Error("An Error");
    });
    it("triggers result action with error message", res => {
      expect(res).toEqual(put(actionResult("An Error")));
    });
    it("and then nothing", res => {
      expect(res).toBeUndefined();
    });
  });
});

function* logout(action) {
  try {
    const logout = yield call(api, "/url");
    yield put(actionResult(logout));
  } catch (error) {
    yield put(actionResult(error.message));
  }
}

describe("AuthSagas: The Logout Saga", () => {
  const it = sagaHelper(logout());
  describe("the logout works", () => {
    it("calls the mock API first with action request payload", res => {
      expect(res).toEqual(call(api, "/url"));
      return {};
    });
    it("triggers result action with return api data", res => {
      expect(res).toEqual(put(actionResult({})));
    });
    it("and then nothing", res => {
      expect(res).toBeUndefined();
    });
  });
  describe("The Api is broken and throws an error", () => {
    const it = sagaHelper(logout());
    it("should call api, will throw an error", res => {
      expect(res).toEqual(call(api, "/url"));
      return new Error("An Error");
    });
    it("triggers result action with error message", res => {
      expect(res).toEqual(put(actionResult("An Error")));
    });
    it("and then nothing", res => {
      expect(res).toBeUndefined();
    });
  });
});

function* editUserProfile(action) {
  try {
    const { payload } = action;
    const editProfile = yield call(api, `/url/${payload.id}`, payload.val);
    yield put(actionResult(editProfile));
  } catch (error) {
    yield put(actionResult(error.message));
  }
}

describe("AuthSagas: The EditUserProfile Saga", () => {
  const it = sagaHelper(editUserProfile(editUserAction));
  describe("the edit profile works", () => {
    it("calls the mock API first with action request payload", res => {
      const { payload } = editUserAction;
      expect(res).toEqual(call(api, `/url/${payload.id}`, payload.val));
      return action.payload.val;
    });
    it("triggers result action with return api data", res => {
      expect(res).toEqual(put(actionResult(action.payload.val)));
    });
    it("and then nothing", res => {
      expect(res).toBeUndefined();
    });
  });
  describe("The Api is broken and throws an error", () => {
    const it = sagaHelper(editUserProfile(editUserAction));
    it("should call api, will throw an error", res => {
      const { payload } = editUserAction;
      expect(res).toEqual(call(api, `/url/${payload.id}`, payload.val));
      return new Error("An Error");
    });
    it("triggers result action with error message", res => {
      expect(res).toEqual(put(actionResult("An Error")));
    });
    it("and then nothing", res => {
      expect(res).toBeUndefined();
    });
  });
});
