const postQuery = require("../../queries/posts");

const getAllPosts = async (body) => {
  try {
    const post = await postQuery.getAllPosts()

    if (post.length === 0) {
      return {
        error: "Not found",
        status: 404,
        message: "That are no posts"
      }
    }
    return post;
  } catch(error) {
    console.log(error);
  }
}

const getPostsByUserId = async (user_id) => {
  try {
    const userPosts = await postQuery.getPostsByUserId(user_id)

    if (!userPosts) {
      return {
        error: "Not found",
        status: 404,
        message: "That are no posts"
      }
    }
    return userPosts;
  } catch(error) {
    console.log(error);
  }
}

const createNewPost = async body => {
  try {
    const { user_id, image_url, description, location, latitude, longitude } = body
    if (user_id && image_url && description && location && latitude && longitude)
    return await postQuery.createNewPost(body)
    else
    return {
      error: "Bad request",
      status: 400,
      message: "Not able to create new post"
    };
  } catch(error) {
    console.log(error);
  }
}

const deletePost = async (id, user_id) => {
  const result = await postQuery.deletePost(id, user_id)

  if (!result) return {
    error: "Bad Request",
    status: 400,
    message: `Could not delete post id ${id}`
  }
  return result
}

module.exports = {
  getAllPosts,
  getPostsByUserId,
  createNewPost,
  deletePost
}
