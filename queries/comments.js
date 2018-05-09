const knex = require("./db");

const getAllComments = () => {
  return knex("comments")
    .select("*");
};

const createComment = (body) => {
  return knex("comments")
    .insert(body)
    .returning("*");
};

module.exports = {
  getAllComments,
  createComment
};
