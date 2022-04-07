export const isVideoLiked = ({ _id, likedList }) => {
  if (likedList.length === 0) {
    return false;
  }
  return likedList.some((video) => video._id === _id);
};

export const isVideoInWatchLater = ({ _id, watchLater }) => {
  if (watchLater.length === 0) return false;
  return watchLater.some((video) => video._id === _id);
};
