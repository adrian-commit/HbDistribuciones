'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.ModelStock, {
        as: 'models',
        foreignKey: 'category'
      });
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
    },
    sub: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
    timestamps: false,
  });

  return Category;
};
