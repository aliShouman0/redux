import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import projectReducer from "./project";
import usersReduces from "./users";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectReducer,
  users:usersReduces
});
