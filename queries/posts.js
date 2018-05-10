const knex = require("./db");

const getAllPosts = async () => {
  return await knex("posts")
    .select("*")
    .orderBy("created_at", "desc")
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
