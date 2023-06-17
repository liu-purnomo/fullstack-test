const errorHandler = (err, req, res, next) => {
  let status = 500;
  let message = "Internal Server Error";

  switch (err.name) {
    case "SequelizeValidationError":
      status = 400;
      message = err.errors[0].message;
      break;

    case "NotFound":
      status = 404;
      message = "Data not found";
      break;
  }

  // return response with status code and message
  res.status(status).json({ message });
};

module.exports = errorHandler;
