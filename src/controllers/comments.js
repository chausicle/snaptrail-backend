const model = require("../models/comments");
const decode = require("jwt-decode");

const getAllComments = async (req, res, next) => {
  try {
    const comments = await model.getAllComments();

    if (comments.error) {
      return next({
        error: comments.error,
        status: comments.status,
        message: comments.message
      });
    }

    res.status(200).json(comments);
  } catch(error) {
    console.log(error);
  }
};

const createComment = async (req, res, next) => {
  try {
    const newComment = await model.createComment(req.body);

    if (newComment.error) {
      return next({
        error: newComment.error,
        status: newComment.status,
        message: newComment.message
      });
    }

    res.status(200).json(newComment);
  } catch(error) {
    console.log(error);
  }
};

module.exports = {
  getAllComments,
  createComment
};
