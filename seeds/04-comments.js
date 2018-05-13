exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1,
          user_id: 1,
          post_id: 5,
          comment: 'This looks dope Jack!'
        },
        {
          id: 2,
          user_id: 2,
          post_id: 1,
          comment: 'Awesome Justin!'
        },
        {
          id: 3,
          user_id: 3,
          post_id: 3,
          comment: 'Wow Rob!!! Your photo looks amazing!'
        }
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments));`
      );
    })
};
