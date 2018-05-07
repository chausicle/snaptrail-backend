exports.up = function(knex, Promise) {
  return knex.schema.createTable("posts", table => {
    table.increments("id")
    table.integer("user_id").notNullable()
    table.foreign("user_id").references("users.id").onDelete("CASCADE")
    table.string("image_url").notNullable().defaultsTo("")
    table.string("description", 1000).notNullable().defaultsTo("")
    table.string("location").notNullable().defaultsTo("")
    table.float("latitude").notNullable().defaultsTo(0)
    table.float("longitude").notNullable().defaultsTo(0)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("posts");
};
