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

const updateUserProfileImage = async (id, user_image) => {
  const error = [];
  console.log('USER_IMAGE ====>>', user_image);

  if (!user_image) error.push("missing user");

  if (error.length > 0) {
    return {
      error,
      status: 400,
      message: "missing data"
    };
  } else {
    let user = await usersQuery.updateUserProfileImage(id, user_image);
    console.log("UESR IN USERS MODELS ======", user);
    return user;
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  updateUserProfileImage
}
