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
        allowNull: false
      },
      request: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      price: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      quntity: {
        type: DataTypes.BIGINT,
        allowNull: false
      }
  }

  let config = {
      tableName: 'items',
      timestamps: false,
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