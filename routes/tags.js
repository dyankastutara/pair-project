let express = require('express');
let router = express.Router();
let models = require('../models');

router.get('/add/:id',(req, res, next)=>{
  models.Tag.findAll({
    include : [models.Question]
  })
  .then(()=>{
      res.render('tags/tags',{
        question_id : req.params.id
      })
  })
})

router.post('/added_tag',(req, res, next)=>{
  models.Tag.create({
    name : req.body.name,
    question_id : req.body.question_id
  })
  .then(()=>{
    res.redirect('../')
  })
})
module.exports = router
