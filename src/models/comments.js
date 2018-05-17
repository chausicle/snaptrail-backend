const commentQuery = require("../../queries/comments");

const getAllComments = async () => {
  try {
    const comments = await commentQuery.getAllComments();

    if (!comments) {
      return {
        error: "Not Found",
        status: 404,
        message: "There are no comments"
      };
    }

    return comments;
  } catch(error) {
    console.log(error);
  }
};

const createComment = async (body) => {
  try {
    const errors = [];

    if (!body.comment) errors.push("Comment is missing");

    if (errors.length > 0) {
      return {
        error: errors,
        status: 400,
        message: "Field is missing"
      };
    } else {
      const newComment = await commentQuery.createComment(body);

      return newComment;
    }
  } catch(error) {
    console.log(error);
  }
};

module.exports = {
  getAllComments,
  createComment
};
