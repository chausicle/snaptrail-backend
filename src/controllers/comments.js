const model = require("../models/comments");
const decode = require("jwt-decode");

const getAllComments = async (req, res, next) => {
  const comments = await model.getAllComments();

  if (comments.error) {
    return next({
      error: comments.error,
      status: comments.status,
      message: comments.message
    });
  }

  res.status(200).json(comments);
};

const createComment = async (req, res, next) => {
  const newComment = await model.createComment(req.body);

  if (newComment.error) {
    return next({
      error: newComment.error,
      status: newComment.status,
      message: newComment.message
    });
  }

  res.status(200).json(newComment);
};

module.exports = {
  getAllComments,
  createComment
};
