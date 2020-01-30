import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"; //9-2
import logger from "redux-logger";
import rootReducer from "./RootReducer";

const middlewares = [logger]; // logger za akcije...možda nepotrebno u većini situacija

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); //9-2

// export default { store, persistor }; //9-2
