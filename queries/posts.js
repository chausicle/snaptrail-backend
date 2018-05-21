const knex = require("./db");

const getAllPosts = async () => {
  try {
    let result;

    return knex("posts")
    .select("*")
    .orderBy("created_at", "desc")
    .then(posts => {
      result = posts;
      return knex("users")
      .select(
        "users.id",
        "users.email",
        "users.username",
        "users.user_image"
      )
      .then(users => {
        posts.forEach((post, index) => {
          result[index].user = users.find(user => user.id === post.user_id)
        })
        return result
      })
    })
  } catch(error) {
    console.log(error);
  }
}

const getPostsByUserId = async user_id => {
  try {
    let result;

    return await knex("posts")
    .select("*")
    .orderBy("created_at", "desc")
    .where({ user_id })
    .then(userPosts => {
      result = userPosts;
      return knex("users")
      .select(
        "users.id",
        "users.email",
        "users.username",
        "users.user_image"
      )
      .then(users => {
        userPosts.forEach((post, index) => {
          result[index].user = users.find(user => user.id === post.user_id)
        })
        return result
      })
    })
  } catch(error) {
    console.log(error);
  }
}

const createNewPost = async (body) => {
  try {
    const post = await knex("posts")
    .insert(body)
    .into("posts")
    .returning("*")

    if(!post) return false
    else return post
  } catch(error) {
    console.log(error);
  }
}

const deletePost = async (id, user_id) => {
  return await knex("posts")
    .select("*")
    .where({ id })
    .andWhere({ user_id })
    .del()
}


module.exports = {
  getAllPosts,
  getPostsByUserId,
  createNewPost,
  deletePost
}
