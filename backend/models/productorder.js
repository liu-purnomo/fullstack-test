"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductOrder.belongsTo(models.Product, { foreignKey: "product_id" });
      ProductOrder.belongsTo(models.Order, { foreignKey: "order_id" });
    }
  }
  ProductOrder.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Product id is required",
          },
          notNull: {
            msg: "Product id is required",
          },
        },
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Order id is required",
          },
          notNull: {
            msg: "Order id is required",
          },
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Quantity is required",
          },
          notNull: {
            msg: "Quantity is required",
          },
        },
      },
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ProductOrder",
    }
  );
  return ProductOrder;
};
