
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE neighborhood RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('neighborhood').insert([
        {name: 'athmar park', avg_price:431000},
        {name: 'baker', avg_price:383750},
        {name: 'belcaro', avg_price:1415519},
        {name: 'berkeley', avg_price:713513},
        {name: 'bonnie brae', avg_price:1347242},
        {name: 'capitol hill/speer', avg_price:454881},
        {name: 'city park', avg_price:1152790},
        {name: 'chaffe park', avg_price:721575},
        {name: 'cheesman park', avg_price:788133},
        {name: 'cherry creek', avg_price:1063324},
        {name: 'congress park', avg_price:527196},
        {name: 'cory-merrill', avg_price:975673},
        {name: 'country club', avg_price:2249060},
        {name: 'curtis park/five points', avg_price:750810},
        {name: 'downtown', avg_price:615047},
        {name: 'golden triangle', avg_price:572730},
        {name: 'hampden', avg_price:499520},
        {name: 'harvey park', avg_price:317414},
        {name: 'highland', avg_price:832962},
        {name: 'hilltop', avg_price:1522264},
        {name: 'jefferson park', avg_price:526836},
        {name: 'krisana park', avg_price:542633},
        {name: 'lodo', avg_price:842741},
        {name: 'lohi', avg_price:738565},
        {name: 'lowry', avg_price:902028},
        {name: 'montclair/mayfair', avg_price:650747},
        {name: 'park hill', avg_price:574340},
        {name: 'platt park', avg_price:606165},
        {name: 'regis', avg_price:695400},
        {name: 'sloans lake', avg_price:697586},
        {name: 'stapleton', avg_price:678437},
        {name: 'sunnyside', avg_price:541158},
        {name: 'university', avg_price:923613},
        {name: 'uptown', avg_price:500257},
        {name: 'virgina village', avg_price:476961},
        {name: 'washington park', avg_price:911994},
        {name: 'whittier', avg_price:598041}
      ]);
    });
};
