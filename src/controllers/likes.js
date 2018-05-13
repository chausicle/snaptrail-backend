const model = require("../models/likes");
const decode = require("jwt-decode");

const getAllLikes = async (req, res, next) => {
  const likes = await model.getAllLikes();

  if (likes.error) return next({...likes})

  res.status(200).json(likes);
};

const createLike = async (req, res, next) => {
  const newLike = await model.createLike(req.body);

  if (newLike.error) return next({...newLike});

  res.status(201).json(newLike);
};

const deleteLike = async (req, res, next) => {
  const result = await model.deleteLike(req.params.id);

  if (result.error) return next({...result});

  res.sendStatus(204);
};

module.exports = {
  getAllLikes,
  createLike,
  deleteLike
};
