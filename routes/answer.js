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



module.exports = router
