const Boom = require('boom')
const debug = require('debug')('tudor:err')

module.exports.errorHandler = async function (err, req, res, next) {
  // Boomify non-boom error
  debug(err)
  if (!Boom.isBoom(err)) {
    err = Boom.boomify(err, { message: err.message })
  }
  const { statusCode, payload } = err.output
  return res.status(statusCode).json(payload)
}

/*
module.exports.logError = async (err, req, res, next) => {

}
*/
