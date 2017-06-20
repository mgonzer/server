
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE restaurant RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('restaurant').insert([
        {name: 'Pho 95',rating:5, neighborhood_id:1},
        {name: 'Chowder Room',rating:5, neighborhood_id:2},
        {name: 'Moxie Eatery',rating:5, neighborhood_id:2},
        {name: 'Denver Biscut Co',rating:5, neighborhood_id:2},
        {name: 'Beatrice & Woodsley',rating:4, neighborhood_id:2},
        {name: 'Vert kitchen', rating:5, neighborhood_id:36},
        {name: 'Devils Food ', rating:4, neighborhood_id:36},
        {name: 'Homegrown Tap and Dough', rating:4, neighborhood_id:36},
        {name: 'Izakaya Den', rating:5, neighborhood_id:28},
        {name: 'Park Burger', rating:4, neighborhood_id:28},
        {name: 'Uno Mas Taqueria Y Cantina', rating:4, neighborhood_id:28},

      ]);
    });
};
