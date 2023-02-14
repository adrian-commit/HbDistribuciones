'use strict';

module.exports = (sequelize, DataTypes) => {
  let alias = 'Quantity'

  let cols = {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      product: {
        type: DataTypes.STRING,
        allowNull: true
      },
      stock: {
        type: DataTypes.BIGINT,
        allowNull: true,
        default: 0
      }
  }

  let config = {
      tableName: 'quantities',
      timestamps: false,
  }

  const Quantity = sequelize.define(alias, cols, config);

  Quantity.associate = function(models){
    Quantity.belongsTo(models.Product,{
      as:'object',
      foreignKey:'product'
    })
  }
};  