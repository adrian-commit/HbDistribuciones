'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => { 
  class Quantity extends Model {
    static associate(models) {
      Quantity.belongsTo(models.Product, {
        as: 'merch',
        foreignKey: 'productId',
      });
    }
  }

  Quantity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      stock: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'Quantity',
      tableName: 'quantities',
      timestamps: false,
    }
  );

  return Quantity;
};
