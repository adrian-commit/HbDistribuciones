'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      Client.hasMany(models.Request, {
        as: 'requests',
        foreignKey: 'clientId'
      });
      Client.belongsTo(models.Warehouse, {
        as:'warehouse',
        foreignKey: 'zoneId'
      })
    }
  };

  Client.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true 
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Client',
    tableName: 'clients',
    timestamps: false,
  });

  return Client;
};
