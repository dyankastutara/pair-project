let express = require('express');
let router = express.Router();
let models = require('../models');

router.get('/tags',(req, res, next)=>{
  models.Question.findAll({})
  .then((query)=>{
    list : query
  })
})

router.post('/tags/submit',(req, res, next)=>{
  models.Tag.create({
    name : req.body.name,
    question_id : req.body.question_id
  })
  .then(()=>{
    res.render('/tags/tags')
  })
})
module.exports = router
