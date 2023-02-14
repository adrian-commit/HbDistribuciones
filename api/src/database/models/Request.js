'use strict';

module.exports = (sequelize, DataTypes) => {
  let alias = 'Request'

  let cols = {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      seller: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      client: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      track: {
        type: DataTypes.DATE,
        allowNull: true
      },
      comission: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      total: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      send: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        default: false
      },
      status:{
        type: DataTypes.INTEGER,
        allowNull: true,
        default: 0
      }
  }

  let config = {
      tableName: 'requests',
      timestamps: false,
  }

  const Request = sequelize.define(alias, cols, config);

  Request.associate = function(models){
    
    Request.hasMany(models.Item,{
      as:'items',
      foreignKey:'request'
    })

    Request.belongsTo(models.Client,{
      as:'customer',
      foreignKey:'client'
    })

    Request.belongsTo(models.User,{
      as:'user',
      foreignKey:'seller'
    })
  }
};