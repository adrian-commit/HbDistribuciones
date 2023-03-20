'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.ModelStock, {
        as: 'models',
        foreignKey: 'categoryId'
      });
      Category.hasMany(models.Category, {
        as:'subcategories',
        foreignKey:'sub'
      });
      Category.belongsTo(models.Category,{
        as:'mainCategory',
        foreignKey:'sub'
      })
    }
  };

  Category.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
    timestamps: false,
  });

  return Category;
};
