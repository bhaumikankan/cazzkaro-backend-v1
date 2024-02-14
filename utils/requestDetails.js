module.exports.requestDetails = (req, res, next) => {
  console.log(`request => ${req.method} - ${req.originalUrl}`);
  next();
};
