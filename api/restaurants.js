const express = require('express')

const router = express.Router()

const queries = require('../db/queries')

router.get('/',(req, res) => {
  queries.getRestaurants().then(restaurants => {
    res.json(restaurants)
  })
})

router.post('/', (req, res) =>{
  queries
    .createRestaurant(req.body)
    .then(results=>{
      res.send(results[0]);
    })
})

router.delete('/:id', (req, res)=>{
  queries
    .deleteRestaurant(req.params.id)
    .then(()=>{
      res.json({
        deleted: true
      })
    })
})

router.put('/:id', (req,res)=>{
  queries
    .updateRestaurant(req.params.id, req.body)
    .then(restaurant=>{
      res.json(restaurant[0])
    })
})

module.exports = router;
