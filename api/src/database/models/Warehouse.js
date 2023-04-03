'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => { 
  class Warehouse extends Model {
    static associate(models) {
        Warehouse.hasMany(models.Quantity, {
        as: 'units',
        foreignKey: 'placeId',
      });
    }
  }

  Warehouse.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false
       },
       address:{
        type: DataTypes.TEXT,
        allowNull:false
       },
       phone:{
        type: DataTypes.BIGINT,
        allowNull: false
       } 
    },
    {
      sequelize,
      modelName: 'Warehouse',
      tableName: 'warehouses',
      timestamps: false,
    }
  );

  return Warehouse;
};
