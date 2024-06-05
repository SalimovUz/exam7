import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  // Boshqa reducerlar bu yerda bo'lishi mumkin
});

export default rootReducer;
