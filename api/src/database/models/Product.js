'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.ModelStock, {
        as: 'models',
        foreignKey: 'model'
      });
      Product.hasOne(models.Quantity, {
        as: 'quantity',
        foreignKey: 'productId'
      });
      Product.hasOne(models.Item, {
        as: 'item',
        foreignKey: 'productId'
      });
    }
  };

  Product.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sku: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'products',
    timestamps: false,
    modelName: 'Product',
  });

  return Product;
};
