const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ModelImage extends Model {
    static associate(models) {
      ModelImage.belongsTo(models.ModelStock, {
        as:'output',
        foreignKey:'modelId'
      })
    }
  };

  ModelImage.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true 
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'empty'
    }
  }, {
    sequelize,
    modelName: 'ModelImage',
    tableName: 'modelsImage',
    timestamps: false
  });

  return ModelImage;
};