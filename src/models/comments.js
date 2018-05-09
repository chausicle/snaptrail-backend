const commentQuery = require("../../queries/comments");

const getAllComments = async () => {
  const comments = await commentQuery.getAllComments();

  if (!comments) {
    return {
      error: "Not Found",
      status: 404,
      message: "There are no comments"
    };
  }

  return comments;
};

const createComment = async (body) => {
  const errors = [];

  if (!body.comment) errors.push("Comment is missing");

  if (!newComment) {
    return {
      error: errors,
      status: 400,
      message: "Field is missing"
    };
  } else {
    const newComment = await commentQuery.createComment(body);

    return newComment;
  }
};

module.exports = {
  getAllComments,
  createComment
};
