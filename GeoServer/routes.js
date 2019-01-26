const express = require ('express')
const router = express.Router();
const knex = require ('./knex.js')

router.get('/', (req, res, next) => {
  res.send('Hi Carrie. I am your server');
})

router.post('/', (req,res,next) => {
  console.log(req.body)
  res.send(req.body);
})
   
module.exports = router;