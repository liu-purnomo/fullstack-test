const {
  Customer,
  Order,
  ProductOrder,
  Product,
  sequelize,
} = require("../models");
class orderController {
  //create order using sql transaction
  static async create(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { customer_name, product_order } = req.body;

      if (product_order.length === 0) throw { name: "ProductOrderRequired" };

      //create customer
      const customer = await Customer.create(
        { name: customer_name },
        { transaction: t }
      );

      //create order
      const order = await Order.create(
        {
          customer_id: customer.id,
          total_price: 0,
        },
        { transaction: t }
      );

      //modification data product_order
      const productOrder = [];

      let totalPrice = 0;

      for (let i = 0; i < product_order.length; i++) {
        //calculate total price
        if (!product_order[i].product_id) throw { name: "ProductIdRequired" };
        const product = await Product.findByPk(
          Number(product_order[i].product_id)
        );
        if (!product) throw { name: "NotFound" };
        if (!product_order[i].quantity) throw { name: "QuantityRequired" };
        //push data to productOrder
        productOrder.push({
          product_id: Number(product_order[i].product_id),
          order_id: order.id,
          quantity: Number(product_order[i].quantity),
          price: product.price * Number(product_order[i].quantity),
        });
        totalPrice += product.price * Number(product_order[i].quantity);
      }

      //bulk create product order
      const newOrder = await ProductOrder.bulkCreate(productOrder, {
        transaction: t,
      });

      // update total price in order
      await Order.update(
        { total_price: totalPrice },
        { where: { id: order.id }, transaction: t }
      );

      await t.commit();
      res.status(201).json({
        customer_name: customer.name,
        total_price: totalPrice,
        orders: newOrder,
      });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }

  //get all order
  static async index(req, res, next) {
    const order = await Order.findAll({
      order: [["id", "DESC"]],
      include: [
        {
          model: Customer,
        },
        {
          model: ProductOrder,
          include: Product,
        },
      ],
    });
    res.status(200).json(order);
  }

  //get order by id
  static async detail(req, res, next) {
    try {
      const { id } = req.params;
      const order = await Order.findByPk(id, {
        include: [
          {
            model: Customer,
          },
          {
            model: ProductOrder,
            include: Product,
          },
        ],
      });
      if (!order) throw { name: "NotFound" };
      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = orderController;
