const knex = require("./db");

const getAllUsers = async () => {
  try {
    return await knex("users")
    .select("id", "username", "email", "user_image");
  } catch(error) {
    console.log(error);
  }
}

const getUserById = async (id) => {
  try {
    return await knex("users")
    .select("id", "username", "email", "user_image")
    .where({ id })
    .first();
  } catch(error) {
    console.log(error);
  }
}

const updateUserProfileImage = async (id, user_image) => {
  try {
    return await knex("users")
    .where({ id })
    .update({ user_image }, ["id", "email", "username", "user_image"]);
  } catch(error) {
    console.log(error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  updateUserProfileImage
}
