import { combineReducers } from "redux";
import ShoppingCartReducer from "./ShoppingCartReducer";

const RootReducer = combineReducers({ ShoppingCartReducer });
export default RootReducer;
