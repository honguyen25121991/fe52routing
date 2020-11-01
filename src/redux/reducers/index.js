import { combineReducers } from "redux";
import listMovieReducer from "./../../containers/HomeTemplate/ListMoviePage/modules/reducer";
import detailPageReducer from "./../../containers/HomeTemplate/DetailPage/modules/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  detailPageReducer,
});

export default rootReducer;
