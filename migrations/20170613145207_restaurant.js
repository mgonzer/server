
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('restaurant', function(table){
      table.increments('id').primary();
      table.string('name').notNull();
      table.integer('rating').notNull();
      table.integer('neighborhood_id').unsigned();
      table.foreign('neighborhood_id').references('id').inTable('neighborhood');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('restaurant')
};
