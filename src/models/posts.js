const postQuery = require("../../queries/posts");

const getAllPosts = async (body) => {
  const post = await postQuery.getAllPosts()

console.log('WAHT IS THIS POOOOOST ==== ', post);

  if (post.length === 0) {
    return {
      error: "Not found",
      status: 404,
      message: "That are no posts"
    }
  }
  return post
}

const getPostsByUserId = async (user_id) => {
  const userPosts = await postQuery.getPostsByUserId(user_id)

  if (!userPosts) {
    return {
      error: "Not found",
      status: 404,
      message: "That are no posts"
    }
  }
  return userPosts
}

const createNewPost = async body => {
  const { user_id, image_url, description, location, latitude, longitude } = body
  if (user_id && image_url && description && location && latitude && longitude)
    return await postQuery.createNewPost(body)
  else
    return {
      error: "Bad request",
      status: 400,
      message: "Not able to create new post"
    }
}

module.exports = {
  getAllPosts,
  getPostsByUserId,
  createNewPost
}
