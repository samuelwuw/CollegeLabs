
exports.up = function(knex) {
  return knex.schema.createTable('citizen', function(table){
    table.string('name').primary();
    table.string('password').notNullable();
    table.string('email').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('citizen');
};
