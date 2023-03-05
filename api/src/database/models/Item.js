'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.belongsTo(models.Product, {
        as: 'Product',
        foreignKey: 'productId'
      });

      Item.belongsTo(models.Request, {
        as: 'Request',
        foreignKey: 'requestId'
      });
    }
  };

  Item.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true 
    },
    product: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    request: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    quantity: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'items',
    timestamps: false,
  });

  return Item;
};
