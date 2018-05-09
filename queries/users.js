const knex = require("./db");

const getAllUsers = async () => {
  return await knex("users")
    .select("id", "username", "email")
}

const getUserById = async (id) => {
  return await knex("users")
    .where("id", id)
    .first()
}

module.exports = {
  getAllUsers,
  getUserById
}
