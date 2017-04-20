'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Question,{foreignKey : "user_id"})
        User.hasMany(models.Answer,{foreignKey : "user_id"})
      }
    }
  });
  return User;
};
