exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users").del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "chausicle",
          email: "chausicle@gmail.com",
          password: "$2a$10$y2MiAwqr5Y0oeQ1YpkcRFuiF.6E0AgyTIr/n7GQCbErIg7LY6R7r6",
          user_image: "http://groups.commonfloor.com/blog/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
        },
        {
          id: 2,
          username: "hobbyrob",
          email: "fariasrobson.rf@gmail.com",
          password: "$2a$10$y2MiAwqr5Y0oeQ1YpkcRFuCxHM029Xf9K6QjvtCNsy3xe50wL4xaO",
          user_image: "http://groups.commonfloor.com/blog/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
        },
        {
          id: 3,
          username: "jackTheRipper",
          email: "justjon@gmail.com",
          password: "$2a$10$y2MiAwqr5Y0oeQ1YpkcRFuntWxiXbOlzYJTlSoqKMcsPf7T9bEuu.",
          user_image: "http://groups.commonfloor.com/blog/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
        },
        {
          id: 4,
          username: "mariaTheSaint",
          email: "justmaria@gmail.com",
          password: "$2a$10$y2MiAwqr5Y0oeQ1YpkcRFuCDc8z5ly4OQS6mr/4qh5lYo5DU7ohWG",
          user_image: "http://groups.commonfloor.com/blog/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
        }
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      );
    })
};
