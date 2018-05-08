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
          comment: 'I always wanted to go to Cowles Mountain Trail, I been looking for a moderate hiking trail near San Diego. Thanks for share Chausicle!'
        },
        {
          id: 2,
          user_id: 2,
          post_id: 1,
          comment: 'I just moved to San Francisco and this Bernal Heights Park Trail works perfect for me, the location is near my house. Thanks Hobbyrob!'
        },
        {
          id: 3,
          user_id: 3,
          post_id: 3,
          comment: 'Wow Maria!!! I have to check it out Glenwood Canyon. Your photo looks amazing!'
        }
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments));`
      );
    })
};
