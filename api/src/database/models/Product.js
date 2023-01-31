'use strict';

module.exports = (sequelize, DataTypes) => {
  let alias = 'Product'

  let cols = {
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
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
      },
      model: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      price: {
        type: DataTypes.BIGINT,
        allowNull: false
      }
  }

  let config = {
      tableName: 'products',
      timestamps: false,
  }

  const Product = sequelize.define(alias, cols, config);

  Product.associate = function(models){
    
    Product.belongsTo(models.Model, {
      as:'standard',
      foreignKey:'model'
    })

    Product.hasOne(models.Quantity,{
      as:'quantity',
      foreignKey:'product'
    })

    Product.hasMany(models.Item,{
      as:'items',
      foreignKey:'item'
    })
  }
};  