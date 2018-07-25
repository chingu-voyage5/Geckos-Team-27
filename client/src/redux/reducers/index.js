import { combineReducers } from "redux";

import homeReducer from "./homeReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  homes: homeReducer,
  auth: authReducer,
  users: userReducer
});

export default rootReducer;
