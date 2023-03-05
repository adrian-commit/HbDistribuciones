'use strict';

module.exports = (sequelize, DataTypes) => {
  let alias = 'Model'

  let cols = {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      category: {
        type: DataTypes.BIGINT,
        allowNull: true
      }
  }

  let config = {
      tableName: 'models',
      timestamps: false,
  }

  const Model = sequelize.define(alias, cols, config);

  Model.associate = function(models){
    
    Model.belongsTo(models.Category, {
      as:'class',
      foreignKey:'category'
    })

    Model.hasMany(models.Product, {
      as:'products',
      foreignKey:'model'
    })
  }
};