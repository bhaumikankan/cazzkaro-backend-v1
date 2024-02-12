module.exports.ApiResponse = (req, res, next) => {
  res.apiResponse = (success, message, data, code) => {
    const statusCode = code || (success ? 200 : 400);
    res.status(statusCode).send({ code: statusCode, message, data });
  };
  next();
};
