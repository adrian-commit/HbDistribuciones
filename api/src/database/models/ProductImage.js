const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    static associate(models) {
        ProductImage.belongsTo(models.Product, {
        as:'output',
        foreignKey:'productId'
      })
    }
  };

  ProductImage.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true 
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: 'defaultImage.png'
    }
  }, {
    sequelize,
    modelName: 'ProductImage',
    tableName: 'productsImage',
    timestamps: false
  });

  return ProductImage;
};