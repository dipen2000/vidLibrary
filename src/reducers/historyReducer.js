import { ACTIONS } from "../constants/actions";

const historyReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_HISTORY_LIST:
      return [...action.payload.data];
    default:
      return state;
  }
};

export { historyReducer };
