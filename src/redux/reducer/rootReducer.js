import { combineReducers } from "redux";
import { articleReducer } from "./articleReducer";
import { counterReducer } from "./counterReducer";

export const rootReducer = combineReducers({
  counterVar: counterReducer,
  articleRoot: articleReducer,
});
