'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    static associate(models) {
      Request.hasOne(models.Item,{
        as: 'item',
        foreignKey: 'requestId'
      });
      Request.belongsTo(models.Client,{
        as: 'client',
        foreignKey: 'clientId'
      });
      Request.belongsTo(models.User,{
        as: 'seller',
        foreignKey: 'sellerId'
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
