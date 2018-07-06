import { combineReducers } from "redux";

import defaultReducer from "./defaultReducer";

const rootReducers = combineReducers({
  default: defaultReducer
});

export default rootReducers;
