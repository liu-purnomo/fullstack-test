const errorHandler = (err, req, res, next) => {
  let status = 500;
  let message = "Internal Server Error";

  switch (err.name) {
    case "SequelizeValidationError":
      status = 400;
      message = err.errors[0].message;
      break;

    case "SequelizeForeignKeyConstraintError":
      status = 400;
      message = "Cannot Delete, Product used on order list";
      break;

    case "NotFound":
      status = 404;
      message = "Data not found";
      break;

    case "QuantityRequired":
      status = 400;
      message = "Quantity is required";
      break;

    case "ProductOrderRequired":
      status = 400;
      message = "Product order is required";
      break;

    case "ProductIdRequired":
      status = 400;
      message = "Product id is required";
      break;
  }

  // return response with status code and message
  res.status(status).json({ message });
};

module.exports = errorHandler;
