let express = require('express');
let router = express.Router();
let models = require('../models');

router.get('/add_answer/:id', (req, res, next)=>{
  models.Question.find({
     where : {
       id : req.params.id
     },
     include : [models.User]
   })
   .then((query)=>{
     models.User.findAll({})
     .then((queryUser)=>{
       res.render('answer/add_answer',{
         data : query,
         user : queryUser,
         question_id : req.params.id
       })
     })
   })
});
// models.User.findAll({}).then()
(query)=>{
  res.render('answer/add_answer',{
    data : query,
    question_id : req.params.id
  })
}

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
        res.redirect("../view_answer/" + answer.question_id);
      });
    }
  })
})


router.post('/submit/:id',(req, res, next)=>{
  models.Answer.create({
    answer : req.body.answer,
    votes : 0,
    user_id : req.body.user_id,
    question_id : req.params.id
  })
  .then(()=>{
    res.redirect('../view_answer/'+req.params.id)
  })
})

// router.get('/view_answer/:id',(req, res, next)=>{
//   models.Answer.findAll({
//     where :{
//       question_id : req.params.id
//     },
//     order: '"votes" DESC',
//     include : [models.User]
//   })
//   .then((query)=>{
//     res.render('answer/view_answer',{
//       data : query,
//       question_id : req.params.id
//     })
//   })
// });

router.get('/view_answer/:id',(req,res,next)=>{
  models.Question.find({
    where : {
      id : req.params.id
    },
    include : [models.User]
  })
  .then((data)=>{
    models.Answer.findAll({
      where : {
        question_id : req.params.id
      },
      order : 'id asc',
      include : [models.User]
    })
    .then((query)=>{
      res.render('answer/view_answer', {
        list: query,
        question: data
      })
    })
  })
});

router.get('/edit/:id',(req,res,next)=>{
  models.Answer.find({
    where : {
      id : req.params.id
    },
    include : [models.User,models.Question]
  })
  .then((query) => {
    res.render('answer/edit_answer', {
      data: query
    });
    // res.send(query)
  })
})

router.post('/update/:id',(req, res, next)=>{
  models.Answer.update({
      answer: req.body.answer,
      user_id: req.body.user_id,
      question_id : req.body.question_id,
      updatedAt : new Date().toISOString()
    },{
    where : {
      id : req.params.id
    }
  })
  .then(data => {
    res.redirect('/answer/view_answer/'+req.body.question_id);
  });
})

router.get('/delete/:id',(req,res,next)=>{
  models.Answer.destroy({
    where :{
      id : req.params.id
    }
  })
  .then(()=>{
    res.redirect('/')
  })
})
module.exports = router
