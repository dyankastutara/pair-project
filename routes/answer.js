let express = require('express');
let router = express.Router();
let models = require('../models');

router.get('/add_answer/:id', (req, res, next)=>{
  models.Question.find({
    where : {
      id : req.params.id
    }
  })
  .then((query)=>{
    res.render('answer/add_answer',{
      data : query
    })
  })
})

router.get('/votes/:id', (req, res, next)=>{
  models.Answer.find({
    where : {
      id : req.params.id
    }
  })
  .then((answer)=>{
    if (answer) {
      answer.updateAttributes({
        votes: answer.votes+1
      })
      .then(()=>{
        res.redirect("/question/view/" + answer.question_id);
      });
    }
  })
})

module.exports = router
