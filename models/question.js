'use strict';
module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    question: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Question.belongsTo(models.User, {foreignKey:'user_id'});
      }
    }
  });
  return Question;
};
