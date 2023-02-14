'use strict';

module.exports = (sequelize, DataTypes) => {
  let alias = 'Team'

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
      level: {
        type: DataTypes.INTEGER,
        allowNull: true,
        default: 0
      }
  }

  let config = {
      tableName: 'teams',
      timestamps: false,
  }

  const Team = sequelize.define(alias, cols, config);

  Team.associate = function(models){
    Team.belongsToMany(models.User, {
      as:'users',
      through:'usersTeams',
      foreignKey:'teamId',
      otherKey:'userId',
      timestamps: false
    })
  }
};