'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {}
  //initialize a model, representing a table in the DB,
  // with attributes and options.
  Message.init({
    //userId: DataTypes.INTEGER,
    message: DataTypes.STRING,
    messageUrl: DataTypes.STRING,
    
  },
   {
    sequelize,
    modelName: 'Message',
    
  })
  return Message
}