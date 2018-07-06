import { FETCH_DEFAULT } from "./types";

const defaultVar = "hello";

export const defaultFn = defaultVar => ({
  type: FETCH_DEFAULT,
  payload: defaultVar
});
