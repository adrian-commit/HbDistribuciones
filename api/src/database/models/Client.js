'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      Client.hasMany(models.Request, {
        as: 'requests',
        foreignKey: 'clientId'
      });
    }
  };

  Client.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true 
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
