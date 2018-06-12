const model = require("../models/users");
const decode = require("jwt-decode");

const getAllUsers = async (req, res, next) => {
  const user = await model.getAllUsers(req.body);
    if (!user) res.status(400).json(users)
    else res.status(200).json(user)
}

const getUserById = async (req, res, next) => {
  try {
    const user = await model.getUserById(req.params.id);

    if (user.error) {
      return next({
        error: user.error,
        status: user.status,
        message: user.message
      })
    }
    else res.status(200).json(user)
  } catch(error) {
    console.log(error);
  }
}

const getuserByToken = async (req, res, next) => {
  try {
    const token = decode(req.token);
    const user = await model.getUserById(token.sub.id);

    if (user.error) {
      return next({ ...user.error });
    } else res.status(200).json(user);
  } catch(error) {
    console.log(error);
  }
}

const updateUserProfileImage = async (req, res, next) => {
  try {
    const user = await model.updateUserProfileImage(req.params.id, req.body.user_image);

    if (user.error) return next({...user});

    res.status(200).json(user);
  } catch(error) {
    console.log(error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  getuserByToken,
  updateUserProfileImage
}
