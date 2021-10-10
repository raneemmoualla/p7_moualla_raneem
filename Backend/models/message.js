'use strict';
const { Model, FLOAT } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {};
  //initialize a model, representing a table in the DB,
  // with attributes and options.
  Message.init({
    message_user: DataTypes.INTEGER,
    message_date: DataTypes.DATEONLY,
    message_content: DataTypes.STRING,
    message_image: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'Message',
    timestamps: false
  });
  return Message;
}; 