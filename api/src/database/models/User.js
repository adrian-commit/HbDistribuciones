'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Team, {
        as:'teams',
        through:'teamsUsers',
        foreignKey:'userId',
        otherKey:'teamId',
        timestamps: false
      })
  
      User.hasMany(models.Request,{
        as:'orders',
        foreingKey:'sellerId'
      })
    }
  };

  User.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true 
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false
  });

  return User;
};
