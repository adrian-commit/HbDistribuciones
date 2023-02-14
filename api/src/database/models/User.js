'use strict';

module.exports = (sequelize, DataTypes) => {
  let alias = 'User'

  let cols = {
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
  }

  let config = {
      tableName: 'users',
      timestamps: false,
  }

  const User = sequelize.define(alias, cols, config);

  User.associate = function(models){
    
    User.belongsToMany(models.Team, {
      as:'teams',
      through:'usersTeams',
      foreignKey:'userId',
      otherKey:'teamId',
      timestamps: false
    }),

    User.hasMany(models.Request,{
      as:'requests',
      foreingKey:'seller'
    })

  }

  return User;
};
