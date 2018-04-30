exports.up = function(knex, Promise) {
  return knex.schema.createTable("posts", table => {
    table.increments("id")
    table.integer("user_id").notNullable()
    table.foreign("user_id").references("users.id").onDelete("CASCADE")
    table.string("image_url").notNullable().defaultsTo("")
    table.string("description").notNullable().defaultsTo("")
    table.string("location").notNullable().defaultsTo("")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("posts");
};
