'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {};
  //initialize a model, representing a table in the DB,
  // with attributes and options.
  User.init({
    user_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_password: DataTypes.STRING,
    user_role: DataTypes.INTEGER,
    user_dateInscription: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};