import { ACTIONS } from "../constants/actions";

const likedReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_LIKED_LIST:
      return [...action.payload.data];
    default:
      return state;
  }
};

export { likedReducer };
