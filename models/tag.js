'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
    name: DataTypes.STRING,
    question_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {

        // associations can be defined here
        Tag.belongsTo(models.Question,{foreignKey : "question_id"})
      }
    }
  });
  return Tag;
};
