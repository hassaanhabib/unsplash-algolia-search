import { combineReducers } from "redux";
import UnsplashImageDetailReducer from "./UnsplashImageDetailReducer";

const reducers = combineReducers({
  imageDetailData: UnsplashImageDetailReducer,
});

export default reducers;
