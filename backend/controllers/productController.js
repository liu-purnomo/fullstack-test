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
    //get all products
    const products = await Product.findAll({ order: [["id", "DESC"]] });
    //return response with status code 200
    res.status(200).json(products);
  }

  //get product detail by id
  static async detail(req, res, next) {
    try {
      //get id from req.params
      const { id } = req.params;
      //get product by id
      const product = await Product.findByPk(+id);
      //if product not found
      if (!product) throw { name: "NotFound" };
      //return response with status code 200
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  //update product by id
  static async update(req, res, next) {
    try {
      //get id from req.params
      const { id } = req.params;
      //get all data from req.body
      const { name, description, price, image_url } = req.body;
      //update product by id
      const product = await Product.update(
        {
          name,
          description,
          price,
          image_url,
        },
        {
          where: {
            id,
          },
        }
      );
      //if product not found
      if (product <= 0) throw { name: "NotFound" };
      //return response with status code 200
      res.status(200).json({
        message: "Product updated successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  //delete product by id
  static async delete(req, res, next) {
    try {
      //get id from req.params
      const { id } = req.params;
      //delete product by id
      const product = await Product.destroy({
        where: {
          id,
        },
      });
      //if product not found
      console.log(product);
      if (product <= 0) throw { name: "NotFound" };
      //return response with status code 200
      res.status(200).json({
        message: "Product deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = productController;
