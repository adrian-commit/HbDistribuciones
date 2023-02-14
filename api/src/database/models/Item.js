'use strict';

module.exports = (sequelize, DataTypes) => {
  let alias = 'Item'

  let cols = {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      product: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      request: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      price: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      quntity: {
        type: DataTypes.BIGINT,
        allowNull: true
      }
  }

  let config = {
      tableName: 'items',
      timestamps: false
  }

  const Item = sequelize.define(alias, cols, config);

  Item.associate = function(models){
    
    Item.belongsTo(models.Product,{
      as:'object',
      foreignKey:'product'
    })

    Item.belongsTo(models.Request,{
      as:'ticket',
      foreignKey:'request'
    })
    
  }
};