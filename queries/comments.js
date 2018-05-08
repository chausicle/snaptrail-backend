const knex = require("./db")

const getAllComments = () => {
  return knex("comments")
    .select("*")
}

module.exports = {
  getAllComments
}
