'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {};
  //initialize a model, representing a table in the DB, 
  //with attributes and options.
  Comment.init({
    comment_user: DataTypes.INTEGER,
    MessageId: DataTypes.STRING,
    comment_content: DataTypes.STRING,
    comment_image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Comment',
    timestamps: false
  });
  return Comment;
}; 