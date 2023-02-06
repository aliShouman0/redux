import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugAssignedToUser,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  getBugsByUser,
  loadBugs,
  addBug,
  assignBugToUser,
} from "./store/bugs";
import { projectAdded } from "./store/project";
import { userAdded } from "./store/users";
// import * as actions from "./store/api";

const store = configureStore();

store.dispatch(loadBugs());

// store.dispatch(loadBugs());

setTimeout(() => {
  store.dispatch(assignBugToUser(1,4));
}, 2000);
 
// setTimeout(() => {
//   store.dispatch(loadBugs());
// }, 2000);

// store.dispatch(addBug({ description: "a" }));

// store.subscribe(() => {
//   console.log("store changed");
// });

// store.dispatch((dispatch, getState) => {
//   dispatch({ type: "bugReceived", bugs: [1, 2, 3] });
// });
// store.dispatch({ type: "error", payload: { message: " what happen!!!" } });

// store.dispatch(userAdded({ name: "ali" }));
// // store.dispatch(userAdded({ name: "user2" }));

// // store.dispatch(projectAdded({ name: "p1" }));

// // store.dispatch(bugAdded({ description: "bug1" }));
// // store.dispatch(bugAdded({ description: "bug2" }));
// // store.dispatch(bugAdded({ description: "bug3" }));

// // store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));

// // store.dispatch(bugResolved({ id: 1 }));

// console.log(store.getState());

// console.log(getUnresolvedBugs(store.getState()));

// console.log(getBugsByUser(1)(store.getState()));
