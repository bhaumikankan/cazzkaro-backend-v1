module.exports.ApiResponse = (req, res, next) => {
  res.apiResponse = (success, message, data) => {
    const statusCode = success ? 200 : 400;
    res.status(statusCode).send({ code: statusCode, message, data });
  };
  next();
};
