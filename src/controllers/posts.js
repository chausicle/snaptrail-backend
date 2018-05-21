const model = require("../models/posts");
const decode = require("jwt-decode")

const getAllPosts = async (req, res, next) => {
  try {

  } catch(error) {
    console.log(error);
  }
  const post = await model.getAllPosts(req.body)

  if (post.error) {
    res.status(400).json(post)
  } else {
    res.status(200).json(post)
  }
}

const getPostsByUserId = async (req, res, next) => {
  try {
    const userPosts = await model.getPostsByUserId(req.params.id)

    if (userPosts.error) {
      return next({
        error: userPosts.error,
        status: userPosts.status,
        message: userPosts.message
      })
    }

    res.status(200).json(userPosts)
  } catch(error) {
    console.log(error);
  }
}

const createNewPost = async (req, res, next) => {
  try {
    const post = await model.createNewPost(req.body)
    if (post.error) {
      return next({
        status: post.status,
        message: post.message,
        errors: post.error
      })
    }
    res.status(201).json(post)
  } catch(error) {
    console.log(error);
  }
}

const deletePost = async (req,res, next) => {
  const post = await model.deletePost(req.params.id, req.body.user_id)
  if (post.error) {
    return next({ ...post })
  }
  res.status(204).json(post)
}

module.exports = {
  getAllPosts,
  getPostsByUserId,
  createNewPost,
  deletePost
}
