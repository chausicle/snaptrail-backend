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

module.exports = {
  getAllUsers,
  getUserById
}
