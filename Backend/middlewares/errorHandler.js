const errorHandler = (err, req, res, next) => {
  res.json({
    success: false,
    message: err.message || "No error message",
    statusCode: err.statusCode || 200,
    data: {},
  });
};

export default errorHandler;