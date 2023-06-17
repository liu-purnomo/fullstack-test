const { Product, Order, Customer, ProductOrder } = require("../models");

const destroyTableProduct = async () => {
  await Product.destroy({
    restartIdentity: true,
    truncate: true,
    cascade: true,
  });
};

const destroyTableProductOrder = async () => {
  await ProductOrder.destroy({
    restartIdentity: true,
    truncate: true,
    cascade: true,
  });
};
const destroyTableCustomer = async () => {
  await Customer.destroy({
    restartIdentity: true,
    truncate: true,
    cascade: true,
  });
};
const destroyTableOrder = async () => {
  await Order.destroy({
    restartIdentity: true,
    truncate: true,
    cascade: true,
  });
};

module.exports = {
  destroyTableProduct,
  destroyTableProductOrder,
  destroyTableCustomer,
  destroyTableOrder,
};
