const { Product } = require("../models");

const createProduct = async () => {
  const addProduct = await Product.create({
    name: "Kopi Kapal Api",
    description: "Kopi Kapal Api Nikmat",
    price: 10000,
    image_url: "https://www.google.com",
  });

  return addProduct;
};

module.exports = { createProduct };
