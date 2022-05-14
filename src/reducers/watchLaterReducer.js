import { ACTIONS } from "../constants/actions";

const watchLaterReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_WATCH_LATER_LIST:
      return [...action.payload.data];
    default:
      return state;
  }
};

export { watchLaterReducer };
