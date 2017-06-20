const knex = require('./knex')

module.exports = {
  getNeighborhoods: function(){
    return knex('neighborhood')
  },
  getNeighborhood: function(id){
    return knex('neighborhood').where('id', id).first();
  },

  getRestaurants: function(){
    return knex('restaurant')
    .join('neighborhood', 'neighborhood.id', 'neighborhood_id')
    .select('restaurant.id as id', 'restaurant.name as name', 'rating', 'neighborhood.name as neighborhood_name', 'neighborhood_id')
  },
  getNeighborhoodRestaurants: function(neighborhood_id){
    return knex('neighborhood')
      .join('restaurant', 'neighborhood.id', 'neighborhood_id')
      .where('restaurant.neighborhood_id', neighborhood_id)
      .select('restaurant.name as name', 'rating','neighborhood.name as neighborhood_name')
  },
  createRestaurant: function(restaurant){
    return knex('restaurant').insert(restaurant).returning('*');
  },
  deleteRestaurant: function(id){
    return knex('restaurant').where('id', id).del();
  },
  updateRestaurant: function(id, restaurant){
    return knex('restaurant').where('id', id).update(restaurant,'*')
  }
}
