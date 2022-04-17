import { combineReducers } from "redux";
import category from "./category/reducer";
import product from "./product/reducer";
import cart from "./cart/reducer";

export default combineReducers({
  category,
  product,
  cart,
});
