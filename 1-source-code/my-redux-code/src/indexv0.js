// import { bugAdded, bugResolved } from "./actions";
// import { BUG_REMOVED } from "./actionType";
// import store from "./store";

// const unsubscribe = store.subscribe(() => {
//   console.log("store change", store.getState());
// });

// store.dispatch(bugAdded("bug1"));
// store.dispatch(bugResolved(1));

// unsubscribe();
// store.dispatch({
//   type: BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });

// console.log(store.getState());

//
import store from "./customStore";
import * as actions from "./actions";

store.subscribe(() => {
  console.log("store changed");
});
store.dispatch(actions.bugAdded("bug1"));

console.log("a", store.getState());
