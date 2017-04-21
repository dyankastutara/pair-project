'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

  let data = [{
    answer:'Uvuvwevwevwe Onyetenyevwe Ugwemubwem Ossas',
    votes:4,
    question_id:1,
    user_id:1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },{
    answer:'Karena begitulah',
    votes:7,
    question_id:1,
    user_id:1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },{
    answer:'Kamu itu aja kok ga tau sih.',
    votes:9,
    question_id:2,
    user_id:1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },{
    answer:'Wekawekaweka',
    votes:4,
    question_id:5,
    user_id:2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },{
    answer:'Karena manusia tercipta dari tanah liat yang kemudian diberi nyawa. Apa sih? Hehehe...',
    votes:8,
    question_id:1,
    user_id:2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }];
    return queryInterface.bulkInsert('Answers', data, {});

  },

  down: function (queryInterface, Sequelize) {

  }
};
