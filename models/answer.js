'use strict';
module.exports = function(sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    answer: DataTypes.STRING,
    votes: DataTypes.INTEGER,
    down_votes: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {

        // associations can be defined here
        Answer.belongsTo(models.Question,{foreignKey : "question_id"})
        Answer.belongsTo(models.User,{foreignKey : "user_id"})

      }
    }
  });
  return Answer;
};
