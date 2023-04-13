'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    static associate(models) {
      Request.hasMany(models.Item,{
        as: 'inventory',
        foreignKey: 'requestId'
      });
      Request.belongsTo(models.Client,{
        as: 'customer',
        foreignKey: 'clientId'
      });
      Request.belongsTo(models.User,{
        as: 'seller',
        foreignKey: 'UserId'
      });
    }
  };

  Request.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true 
    },
    track: {
      type: DataTypes.DATE,
      allowNull: false
    },
    total: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    send: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Request',
    tableName: 'requests',
    timestamps: false
  });

  return Request;
};
