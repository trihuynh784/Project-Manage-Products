import { combineReducers } from "redux";
import cartReducer from "./cart";

const allReducer = combineReducers({
  cartReducer,

  //Add more reducer in here
})

export default allReducer;