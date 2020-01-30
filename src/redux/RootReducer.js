import { combineReducers } from "redux";
import { persistReducer } from "redux-persist"; //9-2
import storage from "redux-persist/lib/storage"; //9-2

import userReducer from "./user/UserReducer";
import cartReducer from "./cart/CartReducer";
import directoryReducer from "./directory/directoryReducer";
//9-2
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};
//9-2
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer
});
//9-2
export default persistReducer(persistConfig, rootReducer);
