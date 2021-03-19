import { combineReducers } from "redux";
import register from "./auth";
import setAlert from "./alert";

export default combineReducers({
  register,
  setAlert,
});
