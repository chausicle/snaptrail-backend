const knex = require("./db");

const getAllPosts = async () => {
  let result;

  return knex("posts")
    .select("*")
    .orderBy("created_at", "desc")
    .then(posts => {
      result = posts
      console.log(result);
      console.log(posts);
      return knex("users")
        .select(
          "users.id",
          "users.email",
          "users.username",
          "users.user_image"
        )
        .then(users => {
          posts.forEach((post, index) => {
            console.log(result[index]);
            result[index].user = users.find(user => user.id === post.user_id)
          })
          return result
        })
    })
}

const getPostsByUserId = async user_id => {
  return await knex("posts")
    .select("*")
    .where({ user_id })
}

const createNewPost = async (body) => {
 const post = await knex("posts")
   .insert(body)
   .into("posts")
   .returning("*")

  if(!post) return false
  else return post
}


module.exports = {
  getAllPosts,
  getPostsByUserId,
  createNewPost
}
