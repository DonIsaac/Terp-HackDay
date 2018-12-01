const winston = require('winston');

const createLogger = module.exports = exports = (app) => {
    // TODO: use app.get('env') to add Console transport if development
    // TODO: add error logs to their own file
    const logger = winston.createLogger({
        format: winston.format.simple(),
        transports: [
            // new winston.transports.File({filename: 'error.log', level: 'error'}),
            new winston.transports.Console()
        ]
    });
    
    return logger;
}
