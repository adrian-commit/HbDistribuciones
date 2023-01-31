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
        allowNull: false
      },
      client: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      track: {
        type: DataTypes.DATE,
        allowNull: false
      },
      comission: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      total: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      send: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
      },
      status:{
        type: DataTypes.INTEGER,
        allowNull: false,
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