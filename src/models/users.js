const usersQuery = require("../../queries/users");

const getAllUsers = async (body) => {
  const user = await usersQuery.getAllUsers();

  if(!user) {
    return {
      error: "Not found",
      status: 404,
      message: "That are no users"
    }
  }
  return user;
}

const getUserById = async (id) => {
  const user = await usersQuery.getUserById(id);

  if(!user) {
    return {
      error: "Not found",
      status: 404,
      message: `User id ${id} does not exist`
    }
  }
  return user;
}

module.exports = {
  getAllUsers,
  getUserById
}
