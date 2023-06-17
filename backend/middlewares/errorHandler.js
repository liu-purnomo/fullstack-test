const errorHandler = (err, req, res, next) => {
  let status;
  let message;

  switch (err.name) {
    case "SequelizeValidationError":
      status = 400;
      message = err.errors[0].message;
      break;

    case "SequelizeUniqueConstraintError":
      status = 400;
      message = err.errors[0].message;
      break;

    // default global error
    default:
      status = 500;
      message = "Internal Server Error";
      break;
  }

  // return response with status code and message
  res.status(status).json({ message });
};

module.exports = errorHandler;
