import { combineReducers } from "redux";

import homeReducer from "./homeReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import reviewReducer from "./reviewReducer";

const rootReducer = combineReducers({
  homes: homeReducer,
  auth: authReducer,
  users: userReducer,
  reviews: reviewReducer
});

export default rootReducer;
