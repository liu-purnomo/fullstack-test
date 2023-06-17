const { Product } = require("../models");

class productController {
  //create new product
  static async create(req, res, next) {
    try {
      //get all data from req.body
      const { name, description, price, image_url } = req.body;

      console.log(req.body);
      //create new product
      const products = await Product.create({
        name,
        description,
        price,
        image_url,
      });
      //return response with status code 201
      res.status(201).json({
        message: "Product created successfully",
      });
    } catch (error) {
      //catch error end send to error handler
      next(error);
    }
  }

  //get all products
  static async index(req, res, next) {
    try {
      //get all products
      const products = await Product.findAll();
      //return response with status code 200
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = productController;
