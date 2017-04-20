'use strict';
module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    question: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Question.belongsTo(models.User,{foreignKey : "user_id"})
        Question.hasMany(models.Tag,{foreignKey:"question_id"})
        Question.hasMany(models.Answer,{foreignKey:"question_id"})
      }
    }
  });
  return Question;
};
