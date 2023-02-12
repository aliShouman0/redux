import { fetchPosts } from "../actions/postAction";
import { FETCH_POSTS, NEW_POSTS } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function postReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payLoad,
      };

    case NEW_POSTS:
      return {
        ...state,
        item: action.payLoad,
      };

    default:
      return state;
  }
}
