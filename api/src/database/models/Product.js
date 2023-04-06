'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.ModelStock, {
        as: 'template',
        foreignKey: 'model'
      });
      Product.hasMany(models.Quantity, {
        as: 'quantities',
        foreignKey: 'productId'
      });
      Product.hasMany(models.Item, {
        as: 'items',
        foreignKey: 'productId'
      });
      Product.hasOne(models.ProductImage, {
        as: 'image',
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
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'products',
    timestamps: false,
    modelName: 'Product',
  });

  return Product;
};
