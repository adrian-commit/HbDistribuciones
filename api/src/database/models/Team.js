'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    static associate(models) {
      Team.belongsToMany(models.User, {
        as:'users',
        through:'teamsUsers',
        foreignKey:'teamId',
        otherKey:'userId',
        timestamps: false
      })
    }
  };

  Team.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Team',
    tableName: 'teams',
    timestamps: false
  });

  return Team;
};