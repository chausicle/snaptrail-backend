exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(function () {
      // Inserts seed entries
      return knex('likes').insert([
        {
          id: 1,
          user_id: 1,
          post_id: 5
        },
        {
          id: 2,
          user_id: 2,
          post_id: 1
        },
        {
          id: 3,
          user_id: 3,
          post_id: 3
        }
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('likes_id_seq', (SELECT MAX(id) FROM likes));`
      );
    })
};
