const winston = require('winston');
// Create a logger instance
const logger = winston.createLogger({
  level: 'info', // Set the minimum log level to output
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Customize the timestamp format
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level}: ${JSON.stringify(message)}`;
    }) // Customize the log format
  ),
  transports: [
    new winston.transports.Console(), // Output logs to the console
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }), // Output error logs to a file
    new winston.transports.File({ filename: 'logs/combined.log' }), // Output all logs to a file
  ],
});
module.exports = logger;
