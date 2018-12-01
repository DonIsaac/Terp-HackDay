/**
 * Utilities library
 */

Object.assign(module.exports, require('./decorators'))
// module.exports.asyncController = require('./asyncDecorators');
module.exports.errorHandler = module.exports.asyncParam(require('./errorHandler').errorHandler)
module.exports.logger = require('./logger')

