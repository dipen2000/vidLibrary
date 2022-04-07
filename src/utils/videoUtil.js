export const isVideoLiked = ({ _id, likedList }) => {
  if (likedList.length === 0) {
    return false;
  }
  return likedList.some((video) => video._id === _id);
};
