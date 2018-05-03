exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          user_id: 1,
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3MIm6EYD6KCdBLcDHzW1qyQ2ly0R65pIjPseS3gqwGNdvcyi",
          description: "Bernal Heights Park Trail is a 1 mile loop trail located near San Francisco, California that offers scenic views and is good for all skill levels.",
          location: "Bernal Heights Park Trail",
          latitude: 37.744385,
          longitude: -122.417046
        },
        {
          id: 2,
          user_id: 1,
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2LKy58Kv7GELztOibRckpAsH-rsd7RD9mA_HAOsbI-ITSmUA",
          description: "Rodeo Valley Trail To Miwok Trail Loop Via Coastal Trail is a 11.3 mile moderately trafficked loop trail located near Mill Valley, California that features beautiful wild flowers and is rated as difficult.",
          location: "Rodeo Valley Trail",
          latitude: 39.563354,
          longitude: -107.332993
        },
        {
          id: 3,
          user_id: 2,
          image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Glenwood_Canyon.jpg/300px-Glenwood_Canyon.jpg",
          description: "Glenwood Canyon: Riding the Interstate is a 15.9 mile heavily trafficked point-to-point trail located near Glenwood Springs, Colorado that features a river and is rated as moderate. The trail is primarily used for fishing, fly fishing, and road biking and is accessible year-round.",
          location: "Glenwood Canyon, Riding the Interstate",
          latitude: 39.563354 ,
          longitude: -107.332993
        },
        {
          id: 4,
          user_id: 2,
          image_url: "http://socalpulse.com/wp-content/uploads/2016/03/hiking-in-los-angeles-1024x660.jpg",
          description: "Runyon Canyon Trail is a 2.4 mile heavily trafficked loop trail located near West Hollywood, California that offers scenic views and is rated as moderate. The trail is primarily used for hiking, walking, trail running, and nature trips and is accessible year-round.",
          location: "Runyon Canyon Trail",
          latitude: 34.1102863,
          longitude: -118.3503554
        },
        {
          id: 5,
          user_id: 3,
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoILKx2TtsmL-WZSk3WjA0qGiBQdW0CH7e3Elx5dcA82WE64uTpg",
          description: "Cowles Mountain Trail is a 2.9 mile heavily trafficked out and back trail located near San Diego, California that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round.",
          location: "Cowles Mountain Trail",
          latitude: 32.937199,
          longitude: -117.127174
        },
        {
          id: 6,
          user_id: 3,
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjw2oQFWlScbmW8FN7KdC8sqvbUBYLosE9dAzrEeayl9D6fRu",
          description: "Mission Peak Loop from Stanford Avenue Staging Area is a 5.8 mile heavily trafficked loop trail located near Warm Springs District, California that features beautiful wild flowers and is rated as difficult. The trail offers a number of activity options and is accessible year-round.",
          location: "Mission Peak",
          latitude: 37.5124365,
          longitude: -121.8805126
        }
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('posts_id_seq', (SELECT MAX(id) FROM posts));`
      );
    })
};
