const express = require('express');

const router = express.Router();

const queries = require('../db/queries')

router.get('/', (req, res)=>{
  queries.getNeighborhoods().then(neighborhoods => {
    res.json(neighborhoods)
  });
});

router.get('/:id', function(req, res){
  queries.getNeighborhood(req.params.id)
    .then(function(neighborhood){
      res.json(neighborhood)
    })
})

router.get('/:id/restaurants', function(req,res){
  queries.getNeighborhoodRestaurants(req.params.id)
    .then(function(hood){
      res.json(hood)
    })
})

module.exports = router;
