const likeQuery = require("../../queries/likes");

const getAllLikes = async () => {
  const likes = await likeQuery.getAllLikes();

  if (likes.length === 0) {
    return {
      error: "Not Found",
      status: 404,
      message: "No likes"
    };
  }

  return likes;
};

const createLike = () => {

};

const deleteLike = () => {

};

module.exports = {
  getAllLikes,
  createLike,
  deleteLike
};
