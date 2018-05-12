const knex = require("./db");

const getAllComments = () => {
  let result;

  return knex("comments")
    .select("*")
    .then(comments => {
      result = comments
      return knex("users")
        .select(
          "users.id",
          "users.email",
          "users.username",
          "users.user_image"
        )
        .then(users => {
          comments.forEach((comment, index) => {
            result[index].user = users.find(user => user.id === comment.user_id)
          });
          return result;
        });
    });
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
