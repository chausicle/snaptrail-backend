const model = require("../models/likes");
const errorHandler = require("../middleware/errorHandler");

const getAllLikes = async (req, res, next) => {
  const likes = await model.getAllLikes();

  if (likes.error) return next(...error)

  res.status(200).json(likes);
};

const createLike = async (req, res, next) => {
  const newLike = await model.createLike();

  if (like.error) return next(...error);

  res.status(201).json(like);
};

const deleteLike = async (req, res, next) => {

};

module.exports = {
  getAllLikes,
  createLike,
  deleteLike
};
