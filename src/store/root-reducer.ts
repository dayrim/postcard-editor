import { combineReducers } from "redux";
import App from "features/App/state/reducer";
import Editor from "features/Editor/state/reducer";

const reducers = combineReducers({
  App,
  Editor,
});

export default reducers;
