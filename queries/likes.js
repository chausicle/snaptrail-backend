const knex = require("./db");

const getAllLikes = () => {
  return knex("likes")
    .select("*");
};

const getLikeByUserId = (post_id, user_id) => {
  return knex("likes")
    .select("*")
    .where({ post_id })
    .andWhere({ user_id })
    .first();
};

const createLike = async body => {
  try {
    const alreadyLiked = await getLikeByUserId(body.post_id, body.user_id);

    if (alreadyLiked === undefined) {
      const newLike = await knex("likes")
      .insert(body)
      .returning("*");

      if (!newLike) return { error: "Could not post the like" };
      else return newLike;
    } else {
      return { error: "User has already liked this post" };
    }
  } catch(error) {
    console.log(error);
  }
};

const deleteLike = async id => {
  try {
    const deletedLike = await knex("likes")
    .where({ id })
    .returning("*")
    .del();

    if (deletedLike[0].id == id) return true;
    else return false;
  } catch(error) {
    console.log(error);
  }
};

module.exports = {
  getAllLikes,
  createLike,
  deleteLike
};
