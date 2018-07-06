import { handleActions } from "redux-actions";

const initState = {
  homes: {}
};

const homeReducer = handleActions(
  {
    FETCH_ALL_HOMES_RESULT: {
      next: (state, action) => ({
        ...state,
        homes: action.payload
      }),
      throw: (state, action) => ({ ...state, err: action.payload.message })
    }
  },
  initState
);

export default homeReducer;
