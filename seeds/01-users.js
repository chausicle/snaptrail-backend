exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users").del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "Justin Chau",
          email: "chausicle@gmail.com",
          password: "$2a$10$y2MiAwqr5Y0oeQ1YpkcRFuiF.6E0AgyTIr/n7GQCbErIg7LY6R7r6",
          user_image: "https://media.licdn.com/dms/image/C5603AQG7OWbMv2pilQ/profile-displayphoto-shrink_800_800/0?e=1531958400&v=beta&t=zI5fBFbF99t5GZqF6N8NtG7n-4sKoUjQz053y6MeCIE"
        },
        {
          id: 2,
          username: "Robson Farias",
          email: "fariasrobson.rf@gmail.com",
          password: "$2a$10$y2MiAwqr5Y0oeQ1YpkcRFuCxHM029Xf9K6QjvtCNsy3xe50wL4xaO",
          user_image: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/940941_991363337597278_2788147579228004851_n.jpg?_nc_cat=0&oh=a81e100421008e1cb0b636a59ccc6fd0&oe=5B9571DA"
        },
        {
          id: 3,
          username: "Jack The Ripper",
          email: "justjon@gmail.com",
          password: "$2a$10$y2MiAwqr5Y0oeQ1YpkcRFuntWxiXbOlzYJTlSoqKMcsPf7T9bEuu.",
          user_image: "https://i2-prod.mirror.co.uk/incoming/article11989234.ece/ALTERNATES/s615/PAY-PROD-Hendrik-de-Jong.jpg"
        },
        {
          id: 4,
          username: "The Fish Man",
          email: "thefishman@gmail.com",
          password: "$2a$10$y2MiAwqr5Y0oeQ1YpkcRFuCDc8z5ly4OQS6mr/4qh5lYo5DU7ohWG",
          user_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5Fcteo5_a1dfqKsZMHpbUdrrDIMKkh-t-3iGLwQ7681J01x6oA"
        }
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      );
    })
};
