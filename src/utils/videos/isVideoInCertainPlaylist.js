const isVideoInCertainPlaylist = (playlist, video) => {
  return playlist?.videos.find((dbVideo) => dbVideo._id === video._id);
};

export { isVideoInCertainPlaylist };
