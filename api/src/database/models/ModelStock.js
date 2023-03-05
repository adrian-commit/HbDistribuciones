'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ModelStock extends Model {
    static associate(models) {
      ModelStock.belongsTo(models.Category, {
        as: 'Category',
        foreignKey: 'categoryId'
      });

      ModelStock.hasMany(models.Product, {
        as: 'Products',
        foreignKey: 'model'
      });
    }
  };

  ModelStock.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ModelStock',
    tableName: 'models',
    timestamps: false,
  });

  return ModelStock;
};
