const model = require("../models/comments")
const decode = require("jwt-decode")

const getAllComments = async (req, res, next) => {
  const comments = await model.getAllComments()

  if (comments.error) {
    return next({
      error: comments.error,
      status: comments.status,
      message: comments.message
    })
  }

  res.status(200).json(comments)
}

const createComment = async (req, res, next) => {
  const id = decode(req.token).sub.id
  const comment = await model.createComment(req.body, id)
}

module.exports = {
  getAllComments,
  createComment
}
