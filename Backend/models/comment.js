'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {};
  //initialize a model, representing a table in the DB, 
  //with attributes and options.
  Comment.init({
    comment: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Comment',
    
  });
  return Comment;
}; 