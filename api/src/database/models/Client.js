'use strict';

module.exports = (sequelize, DataTypes) => {
  let alias = 'Client'

  let cols = {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: true
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      phone: {
        type: DataTypes.BIGINT,
        allowNull: true,
        unique: true
      }
  }

  let config = {
      tableName: 'clients',
      timestamps: false,
  }

  const Client = sequelize.define(alias, cols, config);

  Client.associate = function(models){
    Client.hasMany(models.Request,{
      as:'requests',
      foreingKey:'client'
    })
  }
};