import { handleActions } from "redux-actions";

const initState = {
  reviews: {}
};

const reviewReducer = handleActions(
  {
    FETCH_REVIEWS_RESULT: {
      next: (state, action) => ({
        ...state,
        reviews: action.payload
      }),
      throw: (state, action) => ({ ...state, err: action.payload.message })
    }
  },
  initState
);

export default reviewReducer;
