const usersQuery = require("../../queries/users");

const getAllUsers = async (body) => {
  try {
    const user = await usersQuery.getAllUsers();

    if(!user) {
      return {
        error: "Not found",
        status: 404,
        message: "That are no users"
      };
    }
    return user;
  } catch(error) {
    console.log(error);
  }
}

const getUserById = async (id) => {
  try {
    const user = await usersQuery.getUserById(id);

    if(!user) {
      return {
        error: "Not found",
        status: 404,
        message: `User id ${id} does not exist`
      };
    }
    return user;
  } catch(error) {
    console.log(error);
  }
}

const updateUserProfileImage = async (id, user_image) => {
  try {
    const error = [];

    if (!user_image) error.push("missing user");

    if (error.length > 0) {
      return {
        error,
        status: 400,
        message: "missing data"
      };
    } else {
      let user = await usersQuery.updateUserProfileImage(id, user_image);
      return user;
    }
  } catch(error) {
    console.log(error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  updateUserProfileImage
}
