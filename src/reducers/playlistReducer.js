import { ACTIONS } from "../constants/actions";

const playlistReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PLAYLIST:
      return [...action.payload.data];
    default:
      return state;
  }
};

export { playlistReducer };
