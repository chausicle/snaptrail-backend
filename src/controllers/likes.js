const model = require("../models/likes");
const decode = require("jwt-decode");

const getAllLikes = async (req, res, next) => {
  try {
    const likes = await model.getAllLikes();

    if (likes.error) return next({...likes})

    res.status(200).json(likes);
  } catch(error) {
    console.log(error);
  }
};

const createLike = async (req, res, next) => {
  try {
    const newLike = await model.createLike(req.body);

    if (newLike.error) return next({...newLike});

    res.status(201).json(newLike);
  } catch(error) {
    console.log(error);
  }
};

const deleteLike = async (req, res, next) => {
  try {
    const result = await model.deleteLike(req.params.id);

    if (result.error) return next({...result});

    res.sendStatus(204);
  } catch(error) {
    console.log(error);
  }
};

module.exports = {
  getAllLikes,
  createLike,
  deleteLike
};
