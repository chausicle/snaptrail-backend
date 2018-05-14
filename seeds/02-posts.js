exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          user_id: 1,
          image_url: "https://www.alltrails.com/api/alltrails/photos/19488896/image?size=extra_large&api_key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i",
          description: "Grinnell Glacier Trail is a 9.7 mile heavily trafficked out and back trail located near East Glacier Park, Montana that features a lake and is rated as moderate. The trail offers a number of activity options and is best used from July until September.",
          location: "Grinnell Glacier Trail",
          latitude: 48.69657,
          longitude: -113.71813
        },
        {
          id: 2,
          user_id: 1,
          image_url: "https://www.alltrails.com/api/alltrails/photos/19583025/image?size=extra_large&api_key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i",
          description: "South Kaibab Trail to Cedar Ridge is a 3.1 mile moderately trafficked out and back trail located near Grand Canyon, Arizona that features beautiful wild flowers and is rated as difficult. The trail offers a number of activity options and is best used from March until November. Horses are also able to use this trail.",
          location: "South Kaibab Trail ",
          latitude: 36.056595,
          longitude: -112.125092

        },
        {
          id: 3,
          user_id: 2,
          image_url: "https://www.alltrails.com/api/alltrails/photos/19683458/image?size=extra_large&api_key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i",
          description: "Glenwood Canyon: Riding the Interstate is a 15.9 mile heavily trafficked point-to-point trail located near Glenwood Springs, Colorado that features a river and is rated as moderate. The trail is primarily used for fishing, fly fishing, and road biking and is accessible year-round.",
          location: "Glenwood Canyon, Riding the Interstate",
          latitude: 39.563354 ,
          longitude: -107.332993
        },
        {
          id: 4,
          user_id: 2,
          image_url: "https://www.alltrails.com/api/alltrails/photos/20326829/image?size=extra_large&api_key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i",
          description: "Runyon Canyon Trail is a 2.4 mile heavily trafficked loop trail located near West Hollywood, California that offers scenic views and is rated as moderate. The trail is primarily used for hiking, walking, trail running, and nature trips and is accessible year-round.",
          location: "Runyon Canyon Trail",
          latitude: 34.1102863,
          longitude: -118.3503554
        },
        {
          id: 5,
          user_id: 3,
          image_url: "https://www.alltrails.com/api/alltrails/photos/11672451/image?size=extra_large&api_key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i",
          description: "Mount Ellinor Trail is a 5.3 mile heavily trafficked loop trail located near Lake Cushman, Washington that features a river and is rated as difficult. The trail offers a number of activity options and is best used from March until November. Dogs are also able to use this trail.",
            location: "Mount Ellinor Trail",
          latitude: 47.5220351,
          longitude: -123.2604403
        },
        {
          id: 6,
          user_id: 3,
          image_url: "https://www.alltrails.com/api/alltrails/photos/11100541/image?size=extra_large&api_key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i",
          description: "Multnomah Falls Trail [CLOSED] is a 1.8 mile heavily trafficked out and back trail located near Bridal Veil, Oregon that features a waterfall and is rated as moderate. The trail offers a number of activity options and is best used from March until November. Dogs are also able to use this trail but must be kept on leash.",
          location: "Multnomah Falls Trail",
          latitude: 45.57589,
          longitude: -122.11510
        }
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('posts_id_seq', (SELECT MAX(id) FROM posts));`
      );
    })
};
