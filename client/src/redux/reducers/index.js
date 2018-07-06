import { combineReducers } from "redux";

import defaultReducer from "./defaultReducer";
import homeReducer from "./homeReducer";

const rootReducer = combineReducers({
  default: defaultReducer,
  homes: homeReducer
});

export default rootReducer;
