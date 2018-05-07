const model = require("../models/posts");

const getAllPosts = async (req, res, next) => {
  const post = await model.getAllPosts(req.body)
    if (!post) {
      res.status(400).json(post)
    } else {
      res.status(200).json(post)
    }
}

const createNewPost = async (req, res, next) => {
  const post = await model.createNewPost(req.body)

  if (post.error) {
    return next({
      status: post.status,
      message: post.message,
      errors: post.error
    })
  }
  res.status(201).json(post)
}

module.exports = {
  getAllPosts,
  createNewPost
}
