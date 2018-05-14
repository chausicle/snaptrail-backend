const model = require("../models/users");

const getAllUsers = async (req, res, next) => {
  const user = await model.getAllUsers(req.body);
    if (!user) res.status(400).json(users)
    else res.status(200).json(user)
}

const getUserById = async (req, res, next) => {
  const user = await model.getUserById(req.params.id);

  if (user.error) {
    return next({
      error: user.error,
      status: user.status,
      message: user.message
    })
  }
  else res.status(200).json(user)
}

const updateUserProfileImage = async (req, res, next) => {
  const user = await model.updateUserProfileImage(req.params.id, req.body.user_image);

  if (user.error) return next({...user});

  res.status(200).json(user);
}

module.exports = {
  getAllUsers,
  getUserById,
  updateUserProfileImage
}
