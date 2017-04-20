var express = require('express');
var router = express.Router();
let models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Question.findAll({
    include : [models.User],
    order: 'id ASC'
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
    res.render('tags/tags',{});
  })
})

router.get('/question/delete/:id',(req,res,next)=>{
  models.Question.destroy({
    where :{
      id : req.params.id
    }
  })
  .then(()=>{
    res.redirect('/')
  })
})

router.get('/question/edit/:id',(req,res,next)=>{
  models.Question.find({
    where : {
      id : req.params.id
    },
    include : [models.User]
  })
  .then((query) => {
    res.render('question/edit_question', {
      data: query
    });
  })
})

router.post('/question/update/:id',(req, res, next)=>{
  models.Question.update({
      question: req.body.question,
      user_id: req.body.user_id
    },{
    where : {
      id : req.params.id
    }
  })
  .then(data => {
    res.redirect('/');
  });
})

/*

router.post('/update/:id', function(req, res, next) {
  db.Todo.update({
      task: req.body.task,
      completed: req.body.completed || false,
      user_id: req.body.user_id
    },{
    where : {
      id : req.params.id
    }
  })
  .then(data => {
    res.redirect('/todos');
  })
  .catch(err => {
    res.send(err);
  })
})

*/

module.exports = router;
