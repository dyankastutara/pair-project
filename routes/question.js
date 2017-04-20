var express = require('express');
var router = express.Router();
let models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Question.findAll({
    include : [models.User]
  })
  .then((query)=>{
    res.render('index',{
      list : query
    })
  })
});

router.get('/question/add',(req, res, next)=>{
  models.User.findAll({})
  .then((query)=>{
    res.render('question/new_question',{
      list : query
    })
  })
})

router.post('/question/submit',(req, res, next)=>{
  models.Question.create({
    question : req.body.question,
    user_id : req.body.user_id
  })
  .then(()=>{
    res.resend('tags/tags',{})
  })
})

module.exports = router;
