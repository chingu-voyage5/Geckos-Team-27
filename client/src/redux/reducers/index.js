import { combineReducers } from "redux";

import homeReducer from "./homeReducer";

const rootReducer = combineReducers({
  homes: homeReducer
});

export default rootReducer;
