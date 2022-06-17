import { usePlaylist } from "../../context/playlistContext";
const checkIsVideoInPlaylist = (video) => {
  const { playlistState } = usePlaylist();
  let flag = false;
  for (let i = 0; i < playlistState.length; i++) {
    if (
      playlistState[i]?.videos?.find((dbVideo) => dbVideo._id === video._id)
    ) {
      flag = true;
    }
  }
  return flag;
};

export { checkIsVideoInPlaylist };
