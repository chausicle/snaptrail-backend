const knex = require("./db");

const getAllUsers = async () => {
  return await knex("users")
    .select("id", "username", "email", "user_image")
}

const getUserById = async (id) => {
  return await knex("users")
    .select("id", "username", "email", "user_image")
    .where({ id })
    .first()
}

const updateUserProfileImage = async (id, user_image) => {
  return await knex("users")
    .where({ id })
    .update({ user_image }, ["id", "email", "username", "user_image"])
}

module.exports = {
  getAllUsers,
  getUserById,
  updateUserProfileImage
}
