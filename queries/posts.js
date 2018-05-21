const knex = require("./db");

const getAllPosts = async () => {
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
}

const getPostsByUserId = async user_id => {
  let result;

  return await knex("posts")
    .select("*")
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
}

const createNewPost = async (body) => {
 const post = await knex("posts")
   .insert(body)
   .into("posts")
   .returning("*")

  if(!post) return false
  else return post
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
