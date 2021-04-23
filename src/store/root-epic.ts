import { combineEpics } from "redux-observable";

import * as App from "../features/App/state/epic";
import * as Editor from "../features/Editor/state/epic";

export default combineEpics(...Object.values(App), ...Object.values(Editor));
