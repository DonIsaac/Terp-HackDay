const winston = require('winston')

// TODO: use app.get('env') to add Console transport if development
// TODO: add error logs to their own file
const logger = winston.createLogger({
  format: winston.format.simple(),
  transports: [
    // new winston.transports.File({filename: 'error.log', level: 'error'}),
    new winston.transports.Console()
  ]
})

logger.stream = {
  write: function (message, encoding) {
    logger.info(message)
  }
}

module.exports = exports = logger
