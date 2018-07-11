import { combineReducers } from "redux";

import homeReducer from "./homeReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  homes: homeReducer,
  auth: authReducer
});

export default rootReducer;
