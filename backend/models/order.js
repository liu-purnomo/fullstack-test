"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Customer, { foreignKey: "customer_id" });
      Order.hasMany(models.ProductOrder, { foreignKey: "order_id" });
    }
  }
  Order.init(
    {
      total_price: DataTypes.INTEGER,
      customer_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
