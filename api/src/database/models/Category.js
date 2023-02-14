'use strict';

module.exports = (sequelize, DataTypes) => {
  let alias = 'Category'

  let cols = {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      sub: {
        type: DataTypes.BIGINT,
        allowNull: true
      }
  }

  let config = {
      tableName: 'categories',
      timestamps: false,
  }

  const Category = sequelize.define(alias, cols, config);

  Category.associate = function(models){
    
    Category.hasMany(models.Model, {
      as:'models',
      foreignKey:'category'
    })

    // Category.hasMany(Category,{
    //   as:'subCategories',
    //   foreignKey:'sub'
    // })

    // Category.belongsTo(Category,{
    //   as:'category',
    //   foreignKey:'sub'
    // })
  }
};