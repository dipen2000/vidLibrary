import { ACTIONS } from "../constants/actions";

const videoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_VIDEOS:
      return [...action.payload.data];
    default:
      return state;
  }
};

export { videoReducer };
