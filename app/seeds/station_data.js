// Deletes ALL existing entries
'use strict';

exports.seed = function(knex, Promise) {
  return knex('station_data').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('station_data').insert([{
          id: 1,
          temperature: 45,
          humidity: 23,
          wind_speed: 5,
          wind_direction: 34,
          rain_fall: 3,
          image_path: "files/img/phot.jpg",
          created_at: new Date('2016-12-06 14:26:16 UTC'),
        }, {
          id: 2,
          temperature: 34,
          humidity: 23,
          wind_speed: 2,
          wind_direction: 34,
          rain_fall: 3,
          image_path: "files/img/phot.jpg",
          created_at: new Date('2016-12-06 14:26:16 UTC'),

        }, {
          id: 3,
          temperature: 34,
          humidity: 23,
          wind_speed: 3,
          wind_direction: 34,
          rain_fall: 3,
          image_path: "files/img/phot.jpg",
          created_at: new Date('2016-12-06 14:26:16 UTC'),

        }, {
          id: 4,
          temperature: 34,
          humidity: 23,
          wind_speed: 5,
          wind_direction: 34,
          rain_fall: 3,
          image_path: "files/img/phot.jpg",
          created_at: new Date('2016-12-06 14:26:16 UTC'),
        }, {
          id: 5,
          temperature: 54,
          humidity: 23,
          wind_speed: 54,
          wind_direction: 34,
          rain_fall: 3,
          image_path: "files/img/phot.jpg",
          created_at: new Date('2016-12-06 14:26:16 UTC'),

        }])
      ]);
      // .then(() => {
      //     // return knex.raw(
      //     //   "SELECT setval('station_id_seq', (SELECT MAX(id) FROM station_data))"
      //   );
    });
};
