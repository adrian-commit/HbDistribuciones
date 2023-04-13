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
      });
  
      User.hasMany(models.Request,{
        as:'orders',
        foreingKey:'UserId'
      });
    }
  };

  User.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true 
    },
    userName:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    comission:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }, 
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false
  });

  return User;
};
