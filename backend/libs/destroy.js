const { Product } = require("../models");

const destroyTabelProduct = async () => {
  await Product.destroy({
    restartIdentity: true,
    truncate: true,
    cascade: true,
  });
};

module.exports = { destroyTabelProduct };
