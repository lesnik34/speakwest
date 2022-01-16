import { combineReducers } from "redux";

import globalSlice from "./global";
import popupSlice from "./popup";

export default combineReducers({
  global: globalSlice.reducer,
  popup: popupSlice.reducer,
});
