const commentQuery = require("../../queries/comments")

const getAllComments = async () => {
  const comments = await commentQuery.getAllComments()

  if (!comments) {
    return {
      error: "Not Found",
      status: 404,
      message: "There are no comments"
    }
  }

  return comments
}

const createComment = (body) => {

}

module.exports = {
  getAllComments,
  createComment
}
