import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "../reducer/rootReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const StoreHub = createStore(rootReducer, applyMiddleware(thunk));
