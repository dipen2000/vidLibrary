import { ACTIONS } from "../constants/actions";

const getANewPlaylistsArrAfterAddingOrRemovingVideo = (state, playlistObj) => {
  console.log(playlistObj);
  return state.map((playlist) => {
    return playlist._id === playlistObj._id ? playlistObj : playlist;
  });
};

const playlistReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PLAYLIST:
      return [...action.payload.data];
    case ACTIONS.ADD_TO_PLAYLIST: {
      return [
        ...getANewPlaylistsArrAfterAddingOrRemovingVideo(
          state,
          action.payload.data
        ),
      ];
    }
    case ACTIONS.REMOVE_FROM_PLAYLIST:
      return [
        ...getANewPlaylistsArrAfterAddingOrRemovingVideo(
          state,
          action.payload.data
        ),
      ];
    default:
      return state;
  }
};

export { playlistReducer };
