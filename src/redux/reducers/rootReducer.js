import { combineReducers } from "redux";
import CharacterReducer from "./CharacterReducer";

const rootReducer = combineReducers({
  char: CharacterReducer,
});
export default rootReducer;
