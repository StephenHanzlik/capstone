exports.up = function(knex, Promise) {
  return knex.schema.createTable('station_data',
    (table) => {
      table.increments()
      table.integer("temperature").notNullable()
      table.integer("humidity").notNullable()
      table.integer("wind_speed").notNullable()
      table.integer("wind_direction").notNullable()
      table.integer("rain_fall").notNullable()
      table.string("image_path").notNullable()
      table.dateTime("created_at").notNullable().defaultTo(knex.fn.now())
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('station_data')
};
