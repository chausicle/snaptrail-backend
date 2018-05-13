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

const createLike = async ({ post_id, user_id }) => {
  const error = [];
  if (!post_id) error.push("missing post_id");
  if (!user_id) error.push("missing user_id");

  if (error.length > 0) {
    return {
      error,
      status: 400,
      message: "Missing data"
    };
  } else {
    const like = await likeQuery.createLike({ post_id, user_id });

    if (like.error) return {
      error: "Bad Request",
      status: 400,
      message: like.error
    }

    return like;
  }
};

const deleteLike = async id => {
  const result = await likeQuery.deleteLike(id);

  if (!result) return {
    error: "Bad Request",
    status: 400,
    message: `Could not delete like of id ${id}`
  }

  return result
};

module.exports = {
  getAllLikes,
  createLike,
  deleteLike
};
