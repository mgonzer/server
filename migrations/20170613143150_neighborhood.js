
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('neighborhood', function(table){
      table.increments('id').primary();
      table.string('name').notNull();
      table.integer('avg_price').notNull();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('neighborhood');
};
