import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import moment from "moment/moment";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

// let id = 0;

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    //actions => action handlers

    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },

    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },

    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },

    bugAssignedToUser: (bugs, action) => {
      const { id: bugId, userId } = action.payload;
      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs.list[index].userId = userId;
    },

    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload);
    },

    bugResolved: (bugs, action) => {
      // bugs.map((bug) =>
      //   bug.id != action.payload.id ? bug : { ...bug, resolved: true }
      // ),
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },

    bugRemoved: (bugs, action) => {
      bugs.list.filter((bug) => bug.id != action.payload.id);
    },
  },
});

export default slice.reducer;
export const {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
  bugsReceived,
  bugsRequested,
  bugsRequestFailed,
} = slice.actions;

// Action Creator
const url = "/bugs";
const cacheTime = 10;

export const loadBugs = () => (dispatch, getSate) => {
  const { lastFetch } = getSate().entities.bugs;

  const diffInMinute = moment().diff(lastFetch, "minute");

  if (diffInMinute < cacheTime) return;

  dispatch(
    apiCallBegan({
      url,
      onStart: bugsRequested.type,
      onSuccess: bugsReceived.type,
      onError: bugsRequestFailed.type,
    })
  );
};

export const addBug = (bug) =>
  apiCallBegan({ url, method: "post", data: bug, onSuccess: bugAdded.type });

export const resolvedBug = (id) =>
  apiCallBegan({
    url: url + "/" + id,
    method: "patch",
    data: { resolved: true },
    onSuccess: bugResolved.type,
  });

export const assignBugToUser = (bugId, userId) =>
  apiCallBegan({
    url: url + "/" + bugId,
    method: "patch",
    data: { userId },
    onSuccess: bugAssignedToUser.type,
  });

// //selector
//every time call this will get new array // this is bad think like its more expensive
// export const getUnresolvedBug = (state) =>
//   state.entities.bugs.filter((bug) => !bug.resolved);

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );

//Action Creators
// export const bugUpdated = createAction("bugUpdated");
// export const bugAdded = createAction("bugAdded");
// export const bugRemoved = createAction("bugRemoved");
// export const bugResolved = createAction("bugResolved");

//Reducer

// export default createReducer([], {
//   [bugAdded.type]: (bugs, action) => {
//     bugs.push({
//       id: ++id,
//       description: action.payload.description,
//       resolved: false,
//     });
//   },

//   [bugRemoved.type]: (bugs, action) => {
//     bugs.filter((bug) => bug.id != action.payload.id);
//   },

//   [bugResolved.type]: (bugs, action) => {
//     // bugs.map((bug) =>
//     //   bug.id != action.payload.id ? bug : { ...bug, resolved: true }
//     // ),
//     const index = bugs.findIndex((bug) => bug.id === action.payload.id);
//     bugs[index].resolved = true;
//   },
// });

function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++id,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case bugRemoved.type:
      return state.filter((bug) => bug.id != action.payload.id);

    case bugResolved.type:
      return state.map((bug) =>
        bug.id != action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}
