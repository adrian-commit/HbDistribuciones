'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ModelStock extends Model {
    static associate(models) {
      ModelStock.belongsTo(models.Category, {
        as: 'class',
        foreignKey: 'categoryId'
      });

      ModelStock.hasMany(models.Product, {
        as: 'products',
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
    }
  }, {
    sequelize,
    modelName: 'ModelStock',
    tableName: 'modelss',
    timestamps: false,
  });

  return ModelStock;
};
