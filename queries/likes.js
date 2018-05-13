const knex = require("./db");

const getAllLikes = () => {
  return knex("likes")
    .select("*");
};

const createLike = () => {

};

const deleteLike = () => {

};

module.exports = {
  getAllLikes,
  createLike,
  deleteLike
};
